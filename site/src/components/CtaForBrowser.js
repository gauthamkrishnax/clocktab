import { isMobile, isEdge, isFirefox, browserName } from "react-device-detect";

const CtaForBrowser = () => {
  const browserDetect = () => {
    if (isMobile) {
      return "disabled";
    } else if (isEdge) {
      return "edge";
    } else if (isFirefox) {
      return "firefox";
    } else {
      return "disabled";
    }
  };

  if (browserDetect() === "disabled") {
    return (
      <a href={`Temporarily unavailable for ${browserName}`}>
        <button className="cta" disabled>
          Unavailable for {browserName}
        </button>
      </a>
    );
  }
  if (browserDetect() === "edge") {
    return (
      <a href="	https://microsoftedge.microsoft.com/addons/detail/mffncdjnnndgjebjadfogikbinghcpha">
        <button className="cta">Get it for Edge</button>
      </a>
    );
  }
  if (browserDetect() === "firefox") {
    return (
      <a href="https://addons.mozilla.org/en-US/firefox/addon/clocktab/">
        <button className="cta">Add to Firefox</button>
      </a>
    );
  }
};

export default CtaForBrowser;
