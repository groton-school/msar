import { DateTimeString, NumericBoolean } from '@battis/descriptive-types';

export type Item = {
  ath_schedule_id: number;
  schedule_type: string;
  short_description: null | string;
  schedule_dateTicks: number;
  schedule_date: DateTimeString;
  site_ind: NumericBoolean;
  news_id: null | number;
  section_id: number;
  league_ind: NumericBoolean;
  schedule_opponent_id: number;
  sort_order: number;
  result: null | string;
  score: null | string;
  score_vs: null | string;
  opponent_id: number;
  name: string;
  scrimmage_ind: number;
};

export type Response = Item[];
