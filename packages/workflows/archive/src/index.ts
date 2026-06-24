import { SkyAPI } from '@oauth2-cli/sky-api';
import { register } from '@qui-cli/plugin';
import * as Archive from './Archive.js';

SkyAPI.client.configure({ reason: Archive.name });
await register(Archive);
export { Archive };
