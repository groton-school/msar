import { PuppeteerSession } from '@msar/puppeteer-session';
import { TeamScheduleGetSpa as Schedule } from 'datadirect/dist/api/athleticsSpa/index.js';

export const TeamScheduleGetSpa: PuppeteerSession.Fetchable.Binding<
  Schedule.Payload,
  Schedule.Response
> = PuppeteerSession.Fetchable.bind(Schedule);
