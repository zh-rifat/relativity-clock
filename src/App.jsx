import React from 'react';
import DualClockVisualization from './components/DualClockVisualization';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="starry-background"></div>
      <h1>Relativity Clock</h1>
      <DualClockVisualization />
    </div>
  );
};

export default App;
