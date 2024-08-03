import React from "react";
import { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div>
      <div className='grid place-content-center h-screen'>
        <h1 >Stopwatch</h1>
        <div>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div>
          {running ? (
            <button
              onClick={() => {
                setRunning(false);
              }}
            >
              Stop
            </button>
          ) : (
            <button
              onClick={() => {
                setRunning(true);
              }}
            >
              Start
            </button>
          )}

          <button
            onClick={() => {
              setTime(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
