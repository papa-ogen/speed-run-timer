import React, { useEffect } from "react";

const formatSeconds = (seconds) => {
  var date = new Date(null);
  date.setSeconds(seconds);
  return date.toISOString().substr(11, 8);
};

const Clock = ({ isStarted, timer, setTimer }) => {
  useEffect(() => {
    if (isStarted) {
      const interval = setInterval(() => setTimer(timer + 1), 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isStarted, timer, setTimer]);

  return (
    <div className="w-24">
      <p className="text-2xl">{formatSeconds(timer)}</p>
    </div>
  );
};

export default Clock;
