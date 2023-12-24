"use client";

import { useState, useEffect } from "react";
import moment from "moment-timezone";

export const Clock = ({ city, timeZone }: { city: string; timeZone: string }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().tz(timeZone).format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone]);

  return (
    <div className="btn-secondary mt-8 rounded-full text-lg font-medium">
      <p>{`${city} ${currentTime}`}</p>
    </div>
  );
};
