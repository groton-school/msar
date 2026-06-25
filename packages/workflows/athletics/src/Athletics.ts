import { PathString, URLString } from '@battis/descriptive-types';
import { DatadirectPuppeteer } from '@msar/datadirect-puppeteer';
import { Output } from '@msar/output';
import { PuppeteerSession } from '@msar/puppeteer-session';
import { Colors } from '@qui-cli/colors';
import { Positionals } from '@qui-cli/core';
import { Log } from '@qui-cli/log';
import * as Plugin from '@qui-cli/plugin';
import { Root } from '@qui-cli/root';
import flatten from '@stdlib/utils-flatten-object';
import { parse, stringify } from 'csv/sync';
import type { api } from 'datadirect';
import fs from 'node:fs';
import path from 'node:path';
import { json } from 'node:stream/consumers';
import { Workflow } from '../../../components/workflow/dist/index.js';

const URL_ARG = 'url';
const PATH_ARG = 'pathToCsv';
const LEAD_GROUP_ID = 'Lead Group Id';

Positionals.require({
  [URL_ARG]: {
    description: `The URL of the LMS instance`
  },
  [PATH_ARG]: {
    description: `Path to a CSV file containing a column labeled ${Colors.varName(LEAD_GROUP_ID)}`
  }
});
Positionals.allowOnlyNamedArgs();

export type Configuration = Plugin.Configuration & {
  [PATH_ARG]?: PathString;
  [URL_ARG]?: URLString;
  schedule?: boolean;
  results?: boolean;
  stats?: boolean;
};

export const name = '@msar/athletics';
const config: Configuration = {
  schedule: true,
  results: true,
  stats: true
};

export function configure(proposal: Configuration = {}) {
  for (const key in proposal) {
    if (proposal[key] !== undefined) {
      config[key] = proposal[key];
    }
  }
}

export function options(): Plugin.Options {
  return {
    man: [{ level: 1, text: 'Athletics Options' }],
    flag: {
      schedule: {
        description: 'Download schedule data',
        default: config.schedule
      },
      results: {
        description: 'Download competition results data',
        default: config.results
      },
      stats: {
        description: 'Download team stats data',
        default: config.stats
      }
    }
  };
}

export function init({ values }: Plugin.ExpectedArguments<typeof options>) {
  configure({
    [URL_ARG]: Positionals.get(URL_ARG),
    [PATH_ARG]: Positionals.get(PATH_ARG),
    ...values
  });
}

export async function run() {
  if (!config.url) {
    throw new Error(`${Colors.positionalArg(URL_ARG)} must be defined`);
  }
  if (!config.pathToCsv) {
    throw new Error(`${Colors.positionalArg(PATH_ARG)} must be defined`);
  }

  if (!Output.outputPath()) {
    Output.configure({ outputPath: path.dirname(config.pathToCsv) });
  }

  const data = parse<{ [LEAD_GROUP_ID]: string }>(
    fs.readFileSync(path.resolve(Root.path(), config.pathToCsv), 'utf8'),
    { bom: true, columns: true }
  );

  const auth = await PuppeteerSession.Authenticated.getInstance(config.url, {
    logRequests: Workflow.logRequests()
  });

  const stats = [];
  const statsPath = await Output.avoidOverwrite(
    Output.filePathFromOutputPath(
      Output.outputPath(),
      path.basename(config.pathToCsv, '.csv') + '.stats.csv'
    )
  );
  const results = [];
  const resultsPath = await Output.avoidOverwrite(
    Output.filePathFromOutputPath(
      Output.outputPath(),
      path.basename(config.pathToCsv, '.csv') + '.results.csv'
    )
  );
  const schedule = [];
  const schedulePath = await Output.avoidOverwrite(
    Output.filePathFromOutputPath(
      Output.outputPath(),
      path.basename(config.pathToCsv, '.csv') + '.schedule.csv'
    )
  );

  for (const team of data) {
    const teamId = parseInt(team[LEAD_GROUP_ID]);
    const session = await auth.fork(
      new URL(`/edu-athletics/team-section/${teamId}?svcid=edu`, config.url)
    );
    if (config.schedule) {
      schedule.push(
        ...(
          await DatadirectPuppeteer.api.athleticsSpa.TeamScheduleGetSpa({
            session,
            payload: { teamId, scheduleTypeMask: 0, dateFilter: 0 }
          })
        ).map((o) => flatten(o, { flattenArrays: true }))
      );
      fs.writeFileSync(
        schedulePath,
        stringify(schedule, { header: true }),
        'utf8'
      );
    }
    if (config.results) {
      results.push(
        ...(
          await DatadirectPuppeteer.api.datadirect.athleticresultsget({
            session,
            payload: { format: 'json', sectionId: teamId }
          })
        ).map((o) => flatten(o, { flattenArrays: true }))
      );
      fs.writeFileSync(
        resultsPath,
        stringify(results, { header: true }),
        'utf8'
      );
    }
    if (config.stats) {
      stats.push(
        ...(
          await DatadirectPuppeteer.api.athletics.TeamStatisticsGet({
            session,
            payload: { teamId }
          })
        ).map((o) => flatten(o, { flattenArrays: true }))
      );
      fs.writeFileSync(statsPath, stringify(stats, { header: true }), 'utf8');
    }
    await session.close();
  }
  await auth.close();

  if (config.schedule) {
    Log.info(`Wrote schedule to ${Colors.path(schedulePath, Colors.value)}`);
  }
  if (config.results) {
    Log.info(`Wrote results to ${Colors.path(resultsPath, Colors.value)}`);
  }
  if (config.stats) {
    Log.info(`Wrote stats to ${Colors.path(statsPath, Colors.value)}`);
  }
}
