import { DateString, HTMLString, PathString } from '@battis/descriptive-types';

export type Item = {
  DownloadID: number;
  ItemID: number;
  Description: string;
  LongDescription: HTMLString;
  FileName: string;
  FriendlyFileName: string;
  HasMore: boolean;
  DownloadUrl: PathString;
  ContextLabelID: number;
  ContextValue: number;
  FileTypeID: number;
  SubCategory: string;
  SubCategoryID: number;
  SubCategorySort: number;
  SortOrder: number;
  DeleteOption: number;
  GroupId: number;
  Expired: boolean;
  PublishDateDisplay: DateString;
  ExpireDateDisplay: DateString;
};

export type Response = Item[];
