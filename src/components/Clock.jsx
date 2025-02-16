import React, { useEffect, useState } from 'react';

const Clock = ({ planet, timeDilationFactor }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 0.1 * timeDilationFactor); // Update every 100ms
    }, 100); // Update every 100ms for smooth transition

    return () => clearInterval(interval);
  }, [timeDilationFactor]);

  // Convert time to hours, minutes, and seconds
  const hours = Math.floor((time / 3600)) % 12;
  const minutes = Math.floor((time / 60)) % 60;
  const seconds = time % 60; // Allow fractional seconds

  // Format time as HH:MM:SS
  const formatTime = (value) => (value < 10 ? `0${Math.floor(value)}` : Math.floor(value));
  const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

  // Calculate rotation angles for clock hands
  const hourRotation = (hours * 30) + (minutes * 0.5); // 30 degrees per hour, 0.5 degrees per minute
  const minuteRotation = (minutes * 6) + (seconds * 0.1); // 6 degrees per minute, 0.1 degrees per second
  const secondRotation = seconds * 6; // 6 degrees per second

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h3>{planet.name}</h3>
      <svg width="200" height="200" viewBox="0 0 200 200">
        {/* Clock face */}
        <circle cx="100" cy="100" r="95" fill="#0b3d91" stroke="#ffd700" strokeWidth="2" />
        {/* Hour marks */}
        {Array.from({ length: 12 }).map((_, index) => (
          <line
            key={index}
            x1="100"
            y1="10"
            x2="100"
            y2="20"
            stroke="#ffd700"
            strokeWidth="2"
            transform={`rotate(${index * 30}, 100, 100)`}
          />
        ))}
        {/* Hour hand */}
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="60"
          stroke="#ffd700"
          strokeWidth="6"
          strokeLinecap="round"
          transform={`rotate(${hourRotation}, 100, 100)`}
        />
        {/* Minute hand */}
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="40"
          stroke="#ffd700"
          strokeWidth="4"
          strokeLinecap="round"
          transform={`rotate(${minuteRotation}, 100, 100)`}
        />
        {/* Second hand */}
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="30"
          stroke="#FF0000"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${secondRotation}, 100, 100)`}
        />
        {/* Center circle */}
        <circle cx="100" cy="100" r="5" fill="#ffd700" />
      </svg>
      {/* Numerical time display */}
      <div className="numerical-time">{formattedTime}</div>
    </div>
  );
};

export default Clock;
