import LinkElement from "./LinkElement";
import logo from "../assets/Icon.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Clock Tab Logo" className="logomark" />
        <h1>ClockTab</h1>
      </div>
      <ul className="navLinks">
        <LinkElement name="Features" link="http://www.google.com" />
        <LinkElement name="Support" link="http://www.google.com" />
        <LinkElement name="Privacy Policy" link="http://www.google.com" />
        <LinkElement name="Contribute" link="http://www.google.com" />
      </ul>
    </div>
  );
};

export default Header;
