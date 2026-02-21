import { register } from '@qui-cli/plugin';
import { SkyAPI } from '../../../oauth2-cli/sky-api/dist/index.js';
import * as Archive from './Archive.js';

SkyAPI.client.configure({ reason: Archive.name });
await register(Archive);
export { Archive };
