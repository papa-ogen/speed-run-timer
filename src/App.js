import { useEffect, useState } from "react";
import Clock from "./Clock";
import Header from "./Header";
import {
  clearTime,
  fetchTime,
  getRecordTime,
  saveRecordTime,
} from "./localStorage";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [recordtime, setRecordtime] = useState(0);

  useEffect(() => {
    const time = fetchTime();
    if (time) setTimer(time);

    const t = getRecordTime();
    if (t) setRecordtime(t);
  }, []);

  const startTimer = () => {
    setIsStarted(!isStarted);
  };

  const resetTimer = () => {
    setTimer(0);
    setIsStarted(false);
    clearTime();
  };

  const onSetRecordTime = () => {
    saveRecordTime(timer);
    setRecordtime(timer);
  };

  return (
    <main className="p-1">
      <Header recordtime={recordtime} />
      <div className="flex space-x-2 pl-2">
        <Clock isStarted={isStarted} timer={timer} setTimer={setTimer} />
        <div className="space-x-2">
          <button
            className={`${
              !isStarted
                ? "bg-green-500 hover:bg-green-700"
                : "bg-red-500 hover:bg-red-700"
            } text-white font-bold py-1 px-3 rounded`}
            onClick={startTimer}
          >
            {isStarted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            )}
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
            onClick={resetTimer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>
          <button title="Save" onClick={onSetRecordTime}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
