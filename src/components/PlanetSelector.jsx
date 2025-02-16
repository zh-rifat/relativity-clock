import React from 'react';
import planets from '../data/planets.json';

const PlanetSelector = ({ onSelectPlanet }) => {
  return (
    <select onChange={(e) => onSelectPlanet(JSON.parse(e.target.value))}>
      <option value="">Select a planet</option>
      {planets.map((planet, index) => (
        <option key={index} value={JSON.stringify(planet)}>
          {planet.name}
        </option>
      ))}
    </select>
  );
};

export default PlanetSelector;
