import { SkyAPIPlugin } from './SkyAPIPlugin.js';

export {
  EnvironmentStorage,
  FileStorage,
  TokenStorage
} from '@oauth2-cli/qui-cli/dist/OAuth2.js';
export * from './Client.js';
export * as school from './school/index.js';
export * from './SkyAPIPlugin.js';

export const client = new SkyAPIPlugin();
