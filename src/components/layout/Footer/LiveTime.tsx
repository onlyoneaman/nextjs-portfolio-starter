import React, {useEffect, useState} from "react";

const LiveTime = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="text-md sm:text-lg text-primary font-light w-20 sm:w-28">
      {currentTime}
    </div>
  );
};

export default LiveTime;
