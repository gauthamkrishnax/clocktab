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
        <LinkElement
          name="Features"
          link="https://addons.mozilla.org/en-US/firefox/addon/clocktab/"
        />
        <LinkElement
          name="Support"
          link="https://github.com/gauthamkrishnax/clocktab/issues"
        />
        <LinkElement
          name="Privacy Policy"
          link="https://www.freeprivacypolicy.com/live/42b785ad-93f0-4a36-a41c-ab152ec263ca"
        />
        <LinkElement
          name="Contribute"
          link="https://www.buymeacoffee.com/gauthamkrishna"
        />
      </ul>
    </div>
  );
};

export default Header;
