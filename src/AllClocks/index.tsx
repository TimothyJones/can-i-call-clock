import { Clock } from './Clock';
import { useNow } from './useNow';

import './AllClocks.css';

export const AllClocks = () => {
  const { now } = useNow();
  return (
    <div className="AllClocks">
      <Clock
        now={now}
        timezone="America/Los_Angeles"
        city={['San Francisco', 'Vancouver']}
      />
      <Clock now={now} timezone="America/Toronto" city="Montréal" />
      <Clock now={now} timezone="Australia/Melbourne" />
      <Clock now={now} timezone="Pacific/Auckland" city="Wellington" />
    </div>
  );
};
