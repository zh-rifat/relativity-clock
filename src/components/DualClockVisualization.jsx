import React, { useState } from 'react';
import PlanetSelector from './PlanetSelector';
import Clock from './Clock';
import TimeDilationCalculator from './TimeDilationCalculator';
import planets from '../data/planets.json';

const G = 6.67430e-11;
const c = 299792458;

const DualClockVisualization = () => {
  const [planet1, setPlanet1] = useState(null);
  const [planet2, setPlanet2] = useState(null);
  const [startClocks, setStartClocks] = useState(false);

  const calculateTimeDilationFactor = (planet) => {
    if (!planet) return 1;
    const { mass, radius } = planet;
    const term = 1 - (2 * G * mass) / (radius * c * c);

    if (term <= 0) return 0; // Time stops if term is <= 0
    return Math.sqrt(term);
  };

  const handleStartClocks = () => {
    if (planet1 && planet2) {
      setStartClocks(true);
    } else {
      alert('Please select both planets before starting the clocks.');
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h2>Select Planet 1</h2>
          <PlanetSelector onSelectPlanet={setPlanet1} />
          {planet1 && <TimeDilationCalculator planet={planet1} />}
        </div>
        <div>
          <h2>Select Planet 2</h2>
          <PlanetSelector onSelectPlanet={setPlanet2} />
          {planet2 && <TimeDilationCalculator planet={planet2} />}
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={handleStartClocks}>Start Clocks</button>
      </div>
      <div className="clock-container">
        {planet1 && startClocks && (
          <div className="clock">
            <Clock planet={planet1} timeDilationFactor={calculateTimeDilationFactor(planet1)} />
          </div>
        )}
        {planet2 && startClocks && (
          <div className="clock">
            <Clock planet={planet2} timeDilationFactor={calculateTimeDilationFactor(planet2)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DualClockVisualization;
