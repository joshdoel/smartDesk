// src/components/Clock.js
import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update the time every second

    return () => {
      clearInterval(intervalId); // Clean up the interval
    };
  }, []);

  return (
    <div className="clock">
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
