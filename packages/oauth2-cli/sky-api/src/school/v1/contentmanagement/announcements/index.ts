import { Paginated } from '../../../../Paginated.js';
import { client } from '../../../../SkyAPI.js';
import { ContentManagementRequest } from '../ContentManagementRequest.js';
import { ContentAnnouncement } from './ContentAnnouncement.js';
import { ContentAnnouncementCategory } from './ContentAnnouncementCategory.js';
import { ContentAnnouncementCategoryCollection } from './ContentAnnouncementCategoryCollection.js';

export * from './ContentAnnouncement.js';
export * from './ContentAnnouncementCategory.js';
export * from './ContentAnnouncementCategoryCollection.js';

export async function categories() {
  return new Paginated<ContentAnnouncementCategory>(
    await client.requestJSON<ContentAnnouncementCategoryCollection>(
      'https://api.sky.blackbaud.com/school/v1/contentmanagement/announcements/categories'
    )
  );
}

export async function list(request: ContentManagementRequest) {
  return client.requestJSON<ContentAnnouncement[]>(
    'https://api.sky.blackbaud.com/school/v1/contentmanagement/announcements/list',
    'POST',
    JSON.stringify(request),
    new Headers({ 'Content-Type': 'application/json' })
  );
}
