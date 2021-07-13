import LinkElement from "./LinkElement";

const Header = () => {
  return (
    <div>
      <div>
        {/* <img src="" alt="" /> */}
        <h1>ClockTab</h1>
      </div>
      <div>
        <ul>
          <LinkElement name="Features" link="http://www.google.com" />
          <LinkElement name="Support" link="http://www.google.com" />
          <LinkElement name="Privacy Policy" link="http://www.google.com" />
          <LinkElement name="Contribute" link="http://www.google.com" />
        </ul>
      </div>
    </div>
  );
};

export default Header;
