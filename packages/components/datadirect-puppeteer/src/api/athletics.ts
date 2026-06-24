import { PuppeteerSession } from '@msar/puppeteer-session';
import {
  AthleticTeamsGetAllData as AllData,
  TeamStatisticsGet as Statistics
} from 'datadirect/dist/api/athletics/index.js';

export const AthleticTeamsGetAllData: PuppeteerSession.Fetchable.Binding<
  AllData.Payload,
  AllData.Response
> = PuppeteerSession.Fetchable.bind(AllData);

export const TeamStatisticsGet: PuppeteerSession.Fetchable.Binding<
  Statistics.Payload,
  Statistics.Response
> = PuppeteerSession.Fetchable.bind(Statistics);
