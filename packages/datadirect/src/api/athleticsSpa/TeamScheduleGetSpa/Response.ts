import { DateTimeString, ListOf } from '@battis/descriptive-types';

export type Item = {
  ScheduleId: number;
  TeamId: number;
  EventTitle: string;
  StartDateTime: DateTimeString;
  AthleticLocation: string;
  BuildingName: string;
  RoomName: string;
  Cancelled: boolean;
  EventType: number;
  HomeAway: number;
  Rescheduled: boolean;
  OpponentNames: ListOf<string, ','>;
  CancelRescheduleText: string;
  RescheduleText: 'string';
};

export type Response = Item[];
