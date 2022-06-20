import { DateTime } from 'luxon';
import { useTimeFormats } from './hooks/useTimeFormats';

export const TimeDisplay = ({
  timezone,
  now,
  city,
}: {
  timezone: string;
  now: DateTime;
  city?: string | Array<string>;
}) => {
  const { time, inferredCity, displayTimezone, timeOfDay, timeToNine } =
    useTimeFormats(timezone, now);
  return (
    <div className={`TimeBlock ${timeOfDay}`}>
      <div className="TimeBlockSegment">
        <div className="City">
          {city !== undefined
            ? Array.isArray(city)
              ? city.map((name) => <div className="multi-city">{name}</div>)
              : city
            : inferredCity}
        </div>
        {timeOfDay === 'night' ? 'Asleep' : <div className="Time">{time}</div>}
      </div>

      <div className="TimeBlockSegment">
        <div className="Timezone">{displayTimezone}</div>
        {timeOfDay === 'night' ? (
          <div className="Timezone">
            Awake in <span className="Time">{timeToNine.hours}</span> hr{' '}
            <span className="Time">{timeToNine.minutes}</span> min and{' '}
            <span className="Time">{timeToNine.seconds}</span> s{' '}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
