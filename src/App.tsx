import React from 'react';
import './App.css';
import { useNow } from './hooks/useNow';
import { TimeDisplay } from './TimeDisplay';

function App() {
  const { now } = useNow();
  return (
    <div className="App">
      <TimeDisplay
        now={now}
        timezone="America/Los_Angeles"
        city="San Francisco"
      />
      <TimeDisplay now={now} timezone="America/Toronto" city="Montréal" />
      <TimeDisplay now={now} timezone="Australia/Melbourne" />
      <TimeDisplay now={now} timezone="Pacific/Auckland" city="Wellington" />
      <div className="version">v{process.env.REACT_APP_VERSION}</div>
    </div>
  );
}

export default App;
