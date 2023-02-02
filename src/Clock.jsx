import React, { useEffect } from "react";
import { formatSeconds } from "./helpers";
import { saveTime } from "./localStorage";

const Clock = ({ isStarted, timer, setTimer }) => {
  useEffect(() => {
    if (isStarted) {
      const increasedTimer = timer + 1;
      const interval = setInterval(() => setTimer(increasedTimer), 1000);
      saveTime(increasedTimer);

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
