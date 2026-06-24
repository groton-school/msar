export type Payload = {
  teamId: number;
  /** The only observed `scheduleTypeMask` value is `0` */
  scheduleTypeMask: number;
  /**
   * The only observed `dateFilter` values are `0` and `2`, and `0` seems to
   * provide the most complete data
   */
  dateFilter: number;
};
