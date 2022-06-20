import React from 'react';
import replaceAllInserter from 'string.prototype.replaceall';
import './App.css';
import { AllClocks } from './AllClocks';

replaceAllInserter.shim();

function App() {
  return (
    <div className="App">
      <AllClocks />
      <div className="version">v{process.env.REACT_APP_VERSION}</div>
    </div>
  );
}

export default App;
