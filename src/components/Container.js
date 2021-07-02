import getTime from "../utils/getTime";
import Pair from "./Pair";

import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const Container = () => {
  let time = getTime();
  let [mytime, setMyTime] = useState(DateTime.now().minute);
  console.log(DateTime.DATETIME_FULL);
  useEffect(() => {
    console.log("hi");
    const timer = setInterval(() => {
      setMyTime(DateTime.now().minute);
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div>
      {/* TIME MODULE - ALL TOGETHER STACK  */}
      <div>
        {/* LOGO + WISH - TOP  */}
        <div>
          {" "}
          {` ${time.hour} : ${time.minutes} : ${time.wish} : ${mytime} `}
        </div>
        {/* TIME ELEMENT - MIDDLE */}
        <div></div>
        {/* LOCATION - BOTTOM */}
        <div></div>
      </div>
      {/* DATE MODULE - ALL TOGETHER STACK  */}
      <div>
        {/* DAY  - NAME*/}
        <h3>Day of week</h3>
        <div>
          {/* DATE + MONTH + YEAR */}
          <Pair />
          <Pair />
          <Pair />
        </div>
      </div>
    </div>
  );
};

export default Container;
