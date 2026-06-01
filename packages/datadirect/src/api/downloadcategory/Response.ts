import {
  DateString,
  NumericBoolean,
  URLString
} from '@battis/descriptive-types';

export type Item = {
  group_id: number;
  GroupName: string;
  SharedInd: boolean;
  PreviewUrl: URLString;
  UsedIn: number;
  PublicGroupInd: boolean;
  IsPublic: NumericBoolean;
  MaxPageNum: number;
  TotalRows: number;
  ContextLabelId: number;
  ContextValue: number;
  Id: string;
  Name: string;
  ExpireDate: DateString;
  PublishDate: DateString;
  Primary: boolean;
  ContextLabel: number;
  albumId: number;
  IsPublicCategory: NumericBoolean;
};

export type Response = Item[];
