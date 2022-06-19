import React, { useMemo } from 'react';
import './App.css';
import { useNow } from './useNow';
import { DateTime, Info } from 'luxon';

const cityFromTimezoneString = (timezone: string) => {
  const split = timezone.split('/');
  return split.length === 2 ? split[1] : 'Unknown City';
};

type TimeOfDay = 'lateEvening' | 'earlyEvening' | 'work' | 'morning' | 'night';

const timeOfDayString = (now: DateTime): TimeOfDay => {
  if (now.hour >= 22) {
    return 'lateEvening';
  }
  if (now.hour >= 18) {
    return 'earlyEvening';
  }
  if (now.hour >= 9) {
    return 'work';
  }
  if (now.hour >= 7) {
    return 'morning';
  }
  return 'night';
};

const nextNine = (now: DateTime) => {
  const candidateNine = now.set({ hour: 9, minute: 0, second: 0 });
  return candidateNine < now ? candidateNine.plus({ day: 1 }) : candidateNine;
};

const useTimeFormats = (timezone: string, localNow: DateTime) => {
  const { zone, city, displayTimezone } = useMemo(() => {
    const zone = Info.normalizeZone(timezone);

    return {
      zone,
      city: cityFromTimezoneString(timezone),
      displayTimezone: zone.isValid
        ? zone.offsetName(DateTime.now().toMillis(), { format: 'long' })
        : 'Invalid timezone',
    };
  }, [timezone]);

  return {
    city,
    displayTimezone,
    ...useMemo(() => {
      const now = localNow.setZone(zone);

      const diff = nextNine(now).diff(now, ['hours', 'minutes', 'seconds']);

      return {
        timeToNine: diff,
        timeOfDay: timeOfDayString(now),
        time: now.toLocaleString(DateTime.TIME_WITH_SECONDS),
      };
    }, [localNow, zone]),
  };
};

const TimeDisplay = ({
  timezone,
  now,
}: {
  timezone: string;
  now: DateTime;
}) => {
  const { time, city, displayTimezone, timeOfDay, timeToNine } = useTimeFormats(
    timezone,
    now
  );
  return (
    <div className={`TimeBlock ${timeOfDay}`}>
      <div className="TimeBlockTop">
        <div className="City">{city}</div>
        {timeOfDay === 'lateEvening' || timeOfDay === 'night' ? (
          'Asleep'
        ) : (
          <div className="Time">{time}</div>
        )}
      </div>

      <div className="TimeBlockTop">
        <div className="Timezone">{displayTimezone}</div>
        {timeOfDay === 'lateEvening' || timeOfDay === 'night' ? (
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

function App() {
  const { now } = useNow();
  return (
    <div className="App">
      <TimeDisplay now={now} timezone="Australia/Melbourne" />
      <TimeDisplay now={now} timezone="America/Montreal" />
    </div>
  );
}

export default App;
