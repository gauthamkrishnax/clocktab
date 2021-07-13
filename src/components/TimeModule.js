import Wish from "./Wish";

const TimeModule = ({ time }) => {
  return (
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
        <p className="zone">{time.zone}</p>
      </div>
    </div>
  );
};

export default TimeModule;
