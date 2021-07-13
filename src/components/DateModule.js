import Pair from "./Pair";

const DateModule = ({ time, changeTheme }) => {
  return (
    <div className={`dateModule ${changeTheme()}`}>
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
  );
};

export default DateModule;
