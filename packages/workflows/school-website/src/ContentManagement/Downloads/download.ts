import { URLString } from '@battis/descriptive-types';
import { DatadirectPuppeteer } from '@msar/datadirect-puppeteer';
import { Output } from '@msar/output';
import { PuppeteerSession } from '@msar/puppeteer-session';
import { Workflow } from '@msar/workflow';
import { Colors } from '@qui-cli/colors';
import { Log } from '@qui-cli/log';
import ora from 'ora';
import { cachedDownload } from '../../cachedDownload.js';
import { AnnotatedCategory } from './Annotations.js';

export type Index = AnnotatedCategory[];

export async function download(
  url: URLString,
  session?: PuppeteerSession.Authenticated
) {
  const index: Index = [];
  const indexPath = await Output.avoidOverwrite(
    Output.filePathFromOutputPath(Output.outputPath(), 'downloads.json')
  );
  session =
    session ||
    (await PuppeteerSession.Fetchable.init(url, {
      logRequests: Workflow.logRequests()
    }));
  try {
    for (const category of await DatadirectPuppeteer.api.downloadcategory(
      // FIXME do real pagination
      { session, payload: { pageNumber: 1, rowsPerPage: 1000 } }
    )) {
      Log.debug({ category });
      const categoryIndex: AnnotatedCategory = category;
      categoryIndex.items = await DatadirectPuppeteer.api.download.forpage({
        session,
        pathParams: { Id: category.group_id },
        payload: {
          active: true,
          future: true,
          expired: true
        }
      });
      Log.debug(categoryIndex.items);
      const spinner = ora(category.GroupName).start();
      for (const download of categoryIndex.items) {
        download.download_file_path = await cachedDownload(
          `${url.replace(/\/+$/, '')}/${download.DownloadUrl.replace(/^\/+/, '')}`
        );
      }
      index.push(categoryIndex);
      Output.writeJSON(indexPath, index, { overwrite: true, silent: true });
      spinner.succeed();
    }
  } catch (error) {
    Log.error(Colors.error(error));
  } finally {
    Output.writeJSON(indexPath, index, { overwrite: true });
  }
  return session;
}
