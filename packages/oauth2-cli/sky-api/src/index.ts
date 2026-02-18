import { register } from '@qui-cli/plugin';
import { client } from './SkyAPI.js';

export * as SkyAPI from './SkyAPI.js';

await register(client);
