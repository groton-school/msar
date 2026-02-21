import { SkyAPI } from '@oauth2-cli/sky-api';
import { register } from '@qui-cli/plugin';
import * as SchoolWebsite from './SchoolWebsite.js';

export { SchoolWebsite };

SkyAPI.client.configure({ reason: SchoolWebsite.name });
await register(SchoolWebsite);
