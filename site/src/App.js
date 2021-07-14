import Header from "./components/Header";
import Footer from "./components/Footer";

import dayss from "./assets/day-ss.jpg";
import nightss from "./assets/night-ss.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="main-content">
          <h2>New Tabs That display time and date in a modern layout.</h2>
          <hr />
          <div className="cta-container">
            <button className="cta">Get it on Edge</button>
            <button className="cta-sec">Source Code</button>
          </div>
        </div>
        <div className="gallery">
          <img src={nightss} alt="Night theme" className="night" />
          <img src={dayss} alt="Day theme" className="day" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
