import facebook from "../assets/Icons/facebook.svg";
import google from "../assets/Icons/google.svg";
import twitter from "../assets/Icons/twitter.svg";
import wikipedia from "../assets/Icons/wikipedia.svg";
import youtube from "../assets/Icons/youtube.svg";

const LogoLinks = () => {
  let links = [
    { name: google, link: "https://www.google.co.in/" },
    { name: wikipedia, link: "https://www.wikipedia.org/" },
    { name: youtube, link: "https://www.youtube.com/" },
    { name: twitter, link: "https://twitter.com/" },
    { name: facebook, link: "https://www.facebook.com/" },
  ];
  return (
    <div className="logoLinks">
      {links.map((e) => (
        <a href={e.link} key={e.name}>
          <img src={e.name} alt={`${e} logo`} />
        </a>
      ))}
    </div>
  );
};

export default LogoLinks;
