import { PuppeteerSession } from '@msar/puppeteer-session';
import { download } from 'datadirect/dist/api/index.js';

export const forpage: PuppeteerSession.Fetchable.Binding<
  download.forpage.Payload,
  download.forpage.Response
> = PuppeteerSession.Fetchable.bind(download.forpage);
