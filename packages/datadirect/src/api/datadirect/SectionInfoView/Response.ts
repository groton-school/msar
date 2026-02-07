import {
  DateString,
  NumericBoolean,
  NumericTimestamp
} from '@battis/descriptive-types';

export type Item = {
  /**
   * ```ascii
   * 1 = Academic Group
   * 2 = Athletic Group
   * 3 = Community Group
   * 4
   * 5
   * 6
   * 7 = Dorm Group
   * 8 = Activity Group
   * 9 = Advisory Group
   * ```
   */
  AssociationId: number;
  Block: string;
  CourseTopic: string | null;
  Current: NumericBoolean;
  Description: string;
  Duration: string;
  DurationId: number;
  EndDate: DateString;
  EndDateTicks: NumericTimestamp;
  GroupName: string;
  Id: number;
  Identifier: string;
  IsManager: NumericBoolean;
  IsOwner: NumericBoolean;
  /**
   * ```ascii
   *     ___________
   * 0: |       |   | 2-col (wide left)
   *    |_______|___|
   *     ___________
   * 1: |   |       | 2-col (wide right)
   *    |___|_______|
   *     ___________
   * 2: |___________| header 2-col (wide left)
   *    |_______|___|
   *     ___________
   * 3: |___________| header 2-col (wide right)
   *    |___|_______|
   *     ___________
   * 4: |     |     | 2-col even
   *    |_____|_____|
   *     ___________
   * 5: |   |   |   | 3-col even
   *    |___|___|___|
   * ```
   */
  LayoutId: number;
  LeadSectionId: number;
  Length: number;
  Level: string;
  LevelNum: number;
  OfferingId: number;
  PendingLayoutId: number | null;
  Room: string;
  SchoolYear: string;
  StartDate: DateString;
  StartDateTicks: NumericTimestamp;
  Teacher: string;
  TeacherId: number;
  building_id: number | null;
};

export type Response = Item[];
