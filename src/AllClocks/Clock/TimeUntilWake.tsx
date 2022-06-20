import { TimeOfDay, TimeUntil } from './useTimeFormats/types';

export const TimeUntilWake = ({
  timeOfDay,
  timeUntilWake,
}: {
  timeOfDay: TimeOfDay;
  timeUntilWake: TimeUntil;
}) =>
  timeOfDay === 'night' ? (
    <div className="Timezone">
      Online in <span className="Time">{timeUntilWake.hours}</span> hr{' '}
      <span className="Time">{timeUntilWake.minutes}</span> min and{' '}
      <span className="Time">{timeUntilWake.seconds}</span> s{' '}
    </div>
  ) : (
    <></>
  );
