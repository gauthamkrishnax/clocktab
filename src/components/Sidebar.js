import icon from "../assets/116.png";

const Sidebar = () => {
  return (
    <div className=" sidebar vertical-stack">
      <div className="vertical-stackspace info">
        <div className="vertical-stack center weather">
          <img src={icon} alt="weather icon" />
          <p>partly cloudy</p>
          <hr />
        </div>
        <div className="pair">
          <h2>TEMPERATURE</h2>
          <p>
            35
            <sup>o</sup>C
          </p>
        </div>
        <div className="pair">
          <h2>HUMIDITY</h2>
          <p>85 per</p>
        </div>
      </div>
      <p className="footer">
        Powered by{" "}
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          WeatherAPI.com
        </a>
      </p>
    </div>
  );
};

export default Sidebar;
