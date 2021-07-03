import sun from "../assets/Icons/sun.svg";
import moon from "../assets/Icons/moon.svg";

/* LOGO + WISH - TOP  */

const Wish = ({ theme }) => {
  return (
    <div className="horizontalCenter wish">
      {theme === "light" ? (
        <>
          <img src={sun} alt="sun logo" />
          <h5>Good Morning</h5>
        </>
      ) : (
        <>
          <img src={moon} alt="moon logo" />
          <h5>Good Evening</h5>
        </>
      )}
      <hr />
    </div>
  );
};

export default Wish;
