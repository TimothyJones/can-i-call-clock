import React from 'react';
import './App.css';
import { useNow } from './hooks/useNow';
import { DateTime } from 'luxon';
import { useTimeFormats } from './hooks/useTimeFormats';

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
      <div className="TimeBlockSegment">
        <div className="City">{city}</div>
        {timeOfDay === 'lateEvening' || timeOfDay === 'night' ? (
          'Asleep'
        ) : (
          <div className="Time">{time}</div>
        )}
      </div>

      <div className="TimeBlockSegment">
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
