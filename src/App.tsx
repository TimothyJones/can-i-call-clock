import React from 'react';
import './App.css';
import { useNow } from './hooks/useNow';
import { TimeDisplay } from './TimeDisplay';

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
