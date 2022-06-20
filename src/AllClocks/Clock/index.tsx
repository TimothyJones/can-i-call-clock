import { DateTime } from 'luxon';
import { useTimeFormats } from './useTimeFormats';
import { City } from './City';
import { Time } from './Time';
import { TimeUntilWake } from './TimeUntilWake';

import './Clock.css';

export const Clock = ({
  timezone,
  now,
  city,
}: {
  timezone: string;
  now: DateTime;
  city?: string | Array<string>;
}) => {
  const { time, inferredCity, displayTimezone, timeOfDay, timeUntilWake } =
    useTimeFormats(timezone, now);
  return (
    <div className={`Clock ${timeOfDay}`}>
      <div className="TimeBlockSegment">
        <City city={city ?? inferredCity} />
        <Time timeOfDay={timeOfDay} time={time} />
      </div>

      <div className="TimeBlockSegment">
        <div className="Timezone">{displayTimezone}</div>
        <TimeUntilWake timeOfDay={timeOfDay} timeUntilWake={timeUntilWake} />
      </div>
    </div>
  );
};
