import useDate from "../hooks/useDate";

import Pair from "./Pair";

const Container = () => {
  let time = useDate();
  console.log(time);

  return (
    <div>
      {/* TIME MODULE - ALL TOGETHER STACK  */}
      <div>
        {/* LOGO + WISH - TOP  */}
        <div></div>
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
