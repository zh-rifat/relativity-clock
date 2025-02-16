import React from 'react';

const G = 6.67430e-11; // Gravitational constant
const c = 299792458; // Speed of light

const TimeDilationCalculator = ({ planet }) => {
  if (!planet) return null;

  const calculateTimeDilationFactor = () => {
    const { mass, radius } = planet;
    const term = 1 - (2 * G * mass) / (radius * c * c);
    return Math.sqrt(term);
  };

  const timeDilationFactor = calculateTimeDilationFactor();

  return (
    <div>
      <h2>Time Dilation Factor on {planet.name}: {timeDilationFactor.toFixed(10)}</h2>
    </div>
  );
};

export default TimeDilationCalculator;
