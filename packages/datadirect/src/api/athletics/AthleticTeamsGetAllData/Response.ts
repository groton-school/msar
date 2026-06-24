import {
  DateTimeString,
  EmailString,
  NumericBoolean
} from '@battis/descriptive-types';
import { JSONValue } from '@battis/typescript-tricks';
import { EnableCompileCacheOptions } from 'module';

export type Coach = {
  Id: number;
  TeamId: number;
  CoachType: number;
  RoleDescription: string;
  Head: boolean;
  AddUserToCoachRole: boolean;
  AddressList: JSONValue[];
  PhoneList: JSONValue[];
  GroupName: string;
  Firstname: string;
  Lastname: string;
  FullName: string;
  Email: EmailString;
  UserNameFormatted: string;
  DateAppointed: DateTimeString;
  RowNumber: number;
  RowTotal: number;
  UserId: number;
  FirstName: string;
  LastName: string;
  EmailEffectiveDate: null | DateTimeString;
  RetireDate: null | DateTimeString;
  StudentDisplay: string;
  DisplayName: string;
  DeceasedDate: null | DateTimeString;
  BirthDate: null | DateTimeString;
  ResidentFromDate: null | DateTimeString;
  VisaIssueDate: null | DateTimeString;
  VisaExpireDate: null | DateTimeString;
  PassportExpireDate: null | DateTimeString;
  AnticipatedCompletionDate: null | DateTimeString;
  ClearProfilePhoto: boolean;
};

export type StudentInfo = {
  GradeId: 0;
  GradYear: '2028';
  GradeLevelNameId: 0;
};

export type Player = {
  AthleteId: number;
  Position: string;
  Height: string;
  Weight: string;
  TeamId: number;
  ReturningLetterInd: boolean;
  TeamCaptainInd: boolean;
  UseNickname: boolean;
  LargeHeight: number;
  LargeWidth: number;
  ThumbHeight: number;
  ThumbWidth: number;
  GradYear: '2028';
  PublishPhoto: boolean;
  PublishHeight: boolean;
  PublishWeight: boolean;
  PublishName: boolean;
  GroupName: string;
  Firstname: string;
  Lastname: string;
  Email: EmailString;
  BeginDate: DateTimeString;
  EndDate: DateTimeString;
  Dropped: boolean;
  DropComment: string;
  Enrolled: boolean;
  LockerNum: number;
  UserNameFormatted: string;
  RowNumber: number;
  RowTotal: number;
  UserId: number;
  FirstName: string;
  LastName: string;
  EmailEffectiveDate: null | DateTimeString;
  RetireDate: null | DateTimeString;
  StudentDisplay: string;
  StudentInfo: StudentInfo;
  DeceasedDate: null | DateTimeString;
  BirthDate: null | DateTimeString;
  ResidentFromDate: null | DateTimeString;
  VisaIssueDate: null | DateTimeString;
  VisaExpireDate: null | DateTimeString;
  PassportExpireDate: null | DateTimeString;
  AnticipatedCompletionDate: null | DateTimeString;
  ClearProfilePhoto: boolean;
};

export type Duration = {
  DurationId: number;
  SortOrder: number;
  LevelNum: number;
  SchoolYearLabel: string;
  SchoolYearId: number;
  Name: string;
  Id: number;
  OfferingType: number;
  BeginDate: null | DateTimeString;
  EndDate: null | DateTimeString;
  DaysBeyondTerm: number;
  InUse: boolean;
  Current: boolean;
  dd_id: number;
  SelectedInd: NumericBoolean;
  SchoolLevelIds: JSONValue[];
};

export type Item = {
  SportLevelId: number;
  Selected: boolean;
  SectionId: number;
  GroupLength: number;
  LevelNum: number;
  LevelDescription: string;
  DurationId: number;
  Term: string;
  Coaches: Coach[];
  Players: Player[];
  Sport: string;
  OfferingId: number;
  PublishSchedule: boolean;
  PublishPracticeSchedule: boolean;
  GroupName: string;
  ParentSectionId: number;
  LeadSectionId: number;
  RoomId: number;
  BlockId: number;
  SchoolYearLabel: string;
  Duration: Duration;
};

export type Response = Item[];
