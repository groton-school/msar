import {
  BooleanString,
  DateString,
  DateTimeString,
  NumericBoolean,
  TimeString
} from '@battis/descriptive-types';
import { JSONValue } from '@battis/typescript-tricks';

export type AthleticTeam = {
  SportLevelId: number;
  Selected: boolean;
  SectionId: number;
  GroupLength: number;
  LevelNum: number;
  DurationId: number;
  OfferingId: number;
  PublishSchedule: boolean;
  PublishPracticeSchedule: boolean;
  ParentSectionId: number;
  LeadSectionId: number;
  RoomId: number;
  BlockId: number;
};

export type Item = {
  ScheduleId: number;
  AthleticTeam: AthleticTeam;
  Gamedate: DateTimeString;
  GameDateDisplay: DateString;
  RescheduledInd: boolean;
  CancelledInd: boolean;
  PublishCustomInd: boolean;
  PracticeInd: boolean;
  LeagueInd: boolean;
  ScrimmageInd: boolean;
  TournamentInd: boolean;
  InvitationalInd: boolean;
  PlayoffInd: boolean;
  FacultyInd: boolean;
  AlumniInd: boolean;
  RequireLunch: boolean;
  RequireDinner: boolean;
  TeamId: number;
  HighlightId: number;
  ScrimmageIndstr: BooleanString<'0' | '1'>;
  ScheduleType: number;
  SectionId: number;
  StartTime: TimeString;
  EndTimeSpan: TimeString;
  Opponents: (null | JSONValue)[];
  RescheduledDate: null;
  ModifiedDate: null;
  CreatedDate: null;
  RescheduledNote: '';
  ShowDetails: boolean;
  RoomId: number;
  TransportationId: number;
  CanEdit: boolean;
  MeetInd: NumericBoolean;
  ShowVersus: number;
  ShowDirections: boolean;
  Result: string;
};

export type Response = Item[];
