export type TimeOfDay =
  | 'lateEvening'
  | 'earlyEvening'
  | 'work'
  | 'morning'
  | 'night';

export interface TimeUntil {
  hours: number;
  minutes: number;
  seconds: number;
}
