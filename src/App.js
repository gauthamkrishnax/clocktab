import Container from "./components/Container";
import useGetTimeInfoByMinute from "./utils/useGetTimeInfoByMinute";
import LogoLinks from "./components/LogoLinks";

function App() {
  let timeInfo = useGetTimeInfoByMinute();

  return (
    <div
      className={`app ${
        timeInfo.theme === "light" ? "lightBgImage" : "darkBgImage"
      }`}
    >
      <Container time={timeInfo} />
      <div>
        <LogoLinks />
      </div>
    </div>
  );
}

export default App;
