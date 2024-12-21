import React, { useState, useEffect, useCallback } from 'react';

const CountdownTimer = () => {
  const preventRightClick = (e) => e.preventDefault();

  // Set the birthday to 22 Dec 2002, 00:00:00 IST
  const birthday = new Date('2002-12-22T00:00:00+05:30');
  
  const [timeRemaining, setTimeRemaining] = useState({ years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Function to calculate the remaining time
  const calculateTimeRemaining = useCallback(() => {
    const now = new Date();
    let diff = now - birthday; // Time difference in milliseconds

    // Subtract 24 hours (in milliseconds) to make the timer reflect 24 hours less
    diff -= 24 * 60 * 60 * 1000;

    // Calculate total seconds
    const totalSeconds = Math.floor(diff / 1000);

    // Calculate years, days, hours, minutes, and seconds
    const years = Math.floor(totalSeconds / (60 * 60 * 24 * 365.25)); // Approximate year calculation
    const days = Math.floor((totalSeconds % (60 * 60 * 24 * 365.25)) / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    setTimeRemaining({ years, days, hours, minutes, seconds });
  }, [birthday]);

  useEffect(() => {
    const timer = setInterval(calculateTimeRemaining, 1000); // Update every second
    return () => clearInterval(timer); // Clean up on unmount
  }, [calculateTimeRemaining]);

  // Inline styles for centering the image
  const portraitStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '300px',
    maxWidth: '600px', // Optional: Limits the width of the image
    height: '400px',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    margin: '0 auto', // Centers the image horizontally
  };

  return (
    <div className="countdown-timer">
      <div className="timer">
        <div className="time-unit">
          <h3>{timeRemaining.years}</h3>
          <p>Years</p>
        </div>
        <div className="time-unit">
          <h3>{timeRemaining.days}</h3>
          <p>Days</p>
        </div>
        <div className="time-unit">
          <h3>{timeRemaining.hours}</h3>
          <p>Hours</p>
        </div>
        <div className="time-unit">
          <h3>{timeRemaining.minutes}</h3>
          <p>Minutes</p>
        </div>
        <div className="time-unit">
          <h3>{timeRemaining.seconds}</h3>
          <p>Seconds</p>
        </div>
      </div>
      <h2>Since Being the Most Beautiful Girl on the Earth🌏</h2>

      {/* Applying inline styles for centering */}
      <div className="portrait" style={portraitStyle}>
        <img src="/images/memory10.jpeg" alt="memory10" onContextMenu={preventRightClick} />
      </div>
    </div>
  );
};

export default CountdownTimer;
