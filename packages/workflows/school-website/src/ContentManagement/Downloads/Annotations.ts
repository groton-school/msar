import { PathString } from '@battis/descriptive-types';
import { api } from 'datadirect';

export type AnnotatedItem = api.download.forpage.Item & {
  download_file_path?: PathString;
};

export type AnnotatedCategory = api.downloadcategory.Item & {
  items?: AnnotatedItem[];
};
