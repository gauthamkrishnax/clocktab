import Pair from "./Pair";
import Wish from "./Wish";

const Container = ({ time }) => {
  console.log(time);
  const changeTheme = () => (time.theme === "light" ? "light" : "dark");
  return (
    <div className={`container ${changeTheme()}`}>
      {/* TIME MODULE - ALL TOGETHER STACK  */}
      <div className="timeModule">
        <Wish theme={time.theme} />
        {/* TIME ELEMENT - MIDDLE */}
        <div className="horizontalCenter">
          <h1>
            {time.hour}:{time.minute}
          </h1>
          <div className="timeOffsetContainer">
            <h2 className="bold">{time.meridiem}</h2>
            <h2>{time.namedOffset}</h2>
          </div>
        </div>
        {/* LOCATION - BOTTOM */}
        <div className="horizontalCenter">
          <hr />
          <h4>{time.zone}</h4>
        </div>
      </div>
      {/* DATE MODULE - ALL TOGETHER STACK  */}
      <div className="dateModule">
        {/* DAY  - NAME*/}
        <h3>{time.dayName}</h3>
        <div className="horizontalCenter">
          {/* DATE + MONTH + YEAR */}
          <Pair heading="Day" value={time.day} />
          <span className="month">
            <Pair heading="Month" value={time.month} />
          </span>
          <Pair heading="Year" value={time.year} />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Container;
