import { TimeOfDay } from './useTimeFormats/types';

export const Time = ({
  timeOfDay,
  time,
}: {
  timeOfDay: TimeOfDay;
  time: string;
}) =>
  timeOfDay === 'night' ? <>Asleep</> : <div className="Time">{time}</div>;
