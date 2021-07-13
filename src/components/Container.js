import DateModule from "./DateModule";
import TimeModule from "./TimeModule";

const Container = ({ time }) => {
  const changeTheme = () => (time.theme === "light" ? "light" : "dark");
  return (
    <div className={`container ${changeTheme()}`}>
      {/* TIME MODULE - ALL TOGETHER STACK  */}
      <TimeModule time={time} />
      {/* DATE MODULE - ALL TOGETHER STACK  */}
      <DateModule time={time} changeTheme={changeTheme} />
    </div>
  );
};

export default Container;
