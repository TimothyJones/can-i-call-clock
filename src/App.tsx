import React from 'react';
import './App.css';
import { AllClocks } from './AllClocks';

function App() {
  return (
    <div className="App">
      <AllClocks />
      <div className="version">v{process.env.REACT_APP_VERSION}</div>
    </div>
  );
}

export default App;
