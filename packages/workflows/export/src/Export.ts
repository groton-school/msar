import { PathString } from '@battis/descriptive-types';
import { JSONValue } from '@battis/typescript-tricks';
import { Output } from '@msar/output';
import { Data } from '@msar/types.import';
import { Colors } from '@qui-cli/colors';
import { Positionals } from '@qui-cli/core';
import * as Plugin from '@qui-cli/plugin';
import { Root } from '@qui-cli/root';
import fs from 'node:fs';
import path from 'node:path';
import { copy } from './Files.js';
import { render } from './Page.js';

export type Configuration = Plugin.Configuration & {
  pathToSnapshot?: PathString;
  groupIds?: number[];
  bulletinBoard?: boolean;
  topics?: boolean;
  assignments?: boolean;
};

const PATH_TO_SNAPSHOT = 'pathToSnapshot';
Positionals.require({
  [PATH_TO_SNAPSHOT]: {
    description: 'Path to an msar snapshot JSON index file'
  }
});
Positionals.allowOnlyNamedArgs();

export const name = '@msar/export';

export const config: Configuration = {
  bulletinBoard: true,
  topics: true
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
    man: [{ level: 1, text: 'Export Options' }],
    numList: {
      groupId: {
        description: `Group ID of group to export`
      }
    },
    flag: {
      bulletinBoard: {
        description: `Export bulletin board contents`,
        default: config.bulletinBoard
      },
      topics: {
        description: `Export topic pages`,
        default: config.topics
      },
      assignments: {
        description: `Export assignment pages`,
        default: config.assignments
      }
    }
  };
}

export function init({ values }: Plugin.ExpectedArguments<typeof options>) {
  const pathToSnapshot = Positionals.get(PATH_TO_SNAPSHOT);
  const { groupId: groupIds, ...rest } = values;
  configure({ ...rest, groupIds, pathToSnapshot });
}

let hasrun = false;

export async function run() {
  if (hasrun) {
    throw new Error('wtf');
  } else {
    hasrun = true;
  }
  if (!config.pathToSnapshot) {
    throw new Error(`${Colors.positionalArg(PATH_TO_SNAPSHOT)} is required`);
  }
  let data = JSON.parse(
    fs.readFileSync(path.resolve(Root.path(), config.pathToSnapshot), 'utf8')
  ) as Data[];
  if (config.groupIds) {
    data = data.filter((section) => config.groupIds?.includes(section.GroupId));
  }
  for (const section of data) {
    const sectionPath = await Output.avoidOverwrite(
      Output.filePathFromOutputPath(
        Output.outputPath(),
        section.SectionInfo?.GroupName || 'Untitled'
      )
    );
    if (config.bulletinBoard && section.BulletinBoard) {
      const bulletinBoardPath = Output.filePathFromOutputPath(
        sectionPath,
        'Bulletin Board'
      );
      fs.mkdirSync(bulletinBoardPath, { recursive: true });
      fs.writeFileSync(
        path.join(bulletinBoardPath, 'index.html'),
        (await render({
          body: section.BulletinBoard,
          layout: section.SectionInfo?.LayoutId
        })) || ''
      );
      copy({
        entry: section.BulletinBoard as JSONValue,
        index: config.pathToSnapshot,
        destination: bulletinBoardPath
      });
    }

    if (config.topics && section.Topics) {
      const topicsPath = Output.filePathFromOutputPath(sectionPath, 'Topics');
      for (const topic of section.Topics) {
        const topicPath = await Output.avoidOverwrite(
          Output.filePathFromOutputPath(topicsPath, topic.Name || 'Untitled')
        );
        fs.mkdirSync(topicPath, { recursive: true });
        fs.writeFileSync(
          path.join(topicPath, 'index.html'),
          (await render({ body: topic.Content, layout: topic.LayoutId })) || ''
        );
        copy({
          entry: topic as JSONValue,
          index: config.pathToSnapshot,
          destination: topicPath
        });
      }
    }
  }
}
