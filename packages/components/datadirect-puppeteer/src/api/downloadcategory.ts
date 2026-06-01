import { PuppeteerSession } from '@msar/puppeteer-session';
import { downloadcategory as D } from 'datadirect/dist/api/index.js';

export const downloadcategory: PuppeteerSession.Fetchable.Binding<
  D.Payload,
  D.Response
> = PuppeteerSession.Fetchable.bind(D);
