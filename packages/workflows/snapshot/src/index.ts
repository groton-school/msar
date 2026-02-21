import { SkyAPI } from '@oauth2-cli/sky-api';
import { register } from '@qui-cli/plugin';
import * as Snapshot from './SnapshotMultiple.js';

SkyAPI.client.configure({ reason: Snapshot.name });
await register(Snapshot);
export { Snapshot };
