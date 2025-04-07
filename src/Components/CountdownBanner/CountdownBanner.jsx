import React, { useEffect, useState } from 'react';

const CountdownBanner = () => {
  // Target end time (12 hours from first load)
  const endTime = new Date().getTime() + 12 * 60 * 60 * 1000;

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = endTime - now;

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#f25e5e',
        color: '#fff',
        padding: '10px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '16px',
      }}
    >
      🔥 50% Sale Ending Soon! {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}🔥
    </div>
  );
};

export default CountdownBanner;
