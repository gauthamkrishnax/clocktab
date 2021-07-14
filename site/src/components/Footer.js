import LinkElement from "./LinkElement";

const Footer = () => {
  return (
    <ul className="footer">
      <LinkElement name="Edge Store" link="http://www.google.com" />
      <LinkElement name="Firefox Store" link="http://www.google.com" />
      <LinkElement name="Github Repo" link="http://www.google.com" />
    </ul>
  );
};

export default Footer;
