import { DateTime } from "luxon";
import { useState, useEffect } from "react";

let findTheme = (now) => {
  return now.hour > 6 && now.hour < 18 ? "light" : "dark";
};

let formatZoneText = (str) => {
  let zone = str.replaceAll("_", " ").split("/");
  return `${zone[1]}, ${zone[0]}`;
};

const useGetTimeInfoByMinute = () => {
  let [minute, setMinute] = useState(DateTime.now().minute);

  //CURRENT TIME
  let now = DateTime.now();

  //CHECK EVERY SECOND -> RERENDER ON CHANGE IN MINUTE
  useEffect(() => {
    const timer = setInterval(() => {
      setMinute(DateTime.now().minute);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (minute < 10) {
    minute = `0${minute}`;
  }

  let hour = now.toFormat("h");
  let namedOffset = now.toFormat("ZZZZ");
  let meridiem = now.toFormat("a");
  let theme = findTheme(now);
  let zone = formatZoneText(now.toFormat("z"));
  let day = now.toFormat("d");
  let dayName = now.toFormat("cccc");
  let month = now.toFormat("L");
  let year = now.toFormat("yy");

  return {
    hour,
    minute,
    theme,
    namedOffset,
    meridiem,
    zone,
    day,
    dayName,
    month,
    year,
  };
};

export default useGetTimeInfoByMinute;
