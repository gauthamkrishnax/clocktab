import LinkElement from "./LinkElement";

const Footer = () => {
  return (
    <ul className="footer">
      <LinkElement
        name="Edge Store"
        link="	https://microsoftedge.microsoft.com/addons/detail/mffncdjnnndgjebjadfogikbinghcpha"
      />
      <LinkElement
        name="Firefox Store"
        link="https://addons.mozilla.org/en-US/firefox/addon/clocktab/"
      />
      <LinkElement
        name="Github Repo"
        link="https://github.com/gauthamkrishnax/clocktab"
      />
    </ul>
  );
};

export default Footer;
