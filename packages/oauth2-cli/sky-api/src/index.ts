import { register } from '@qui-cli/plugin';
import { client } from './SkyAPI.js';

export * as SkyAPI from './SkyAPI.js';
export * from './SkyAPIPlugin.js'
export * from '@oauth2-cli/qui-cli/dist/Export.js'
export {Token, Client} from '@oauth2-cli/qui-cli/dist/Extend.js'

await register(client);
