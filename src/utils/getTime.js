import { DateTime } from "luxon";

const getTime = () => {
  let hour, minutes, wish;
  let now = DateTime.now();
  // hour = DateTime.now().hour;
  hour = now.toFormat("h");
  minutes = DateTime.now().minute;
  wish = "Good Morning";
  if (hour > 12) {
    hour = hour - 12;
    wish = "Good Evening";
  }
  return { hour, minutes, wish };
};

export default getTime;
