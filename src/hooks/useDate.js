import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const useDate = () => {
  let [time, setTime] = useState();

    var now = DateTime.now();
    setTimeout((values = now.c), 10000);
    setTime(values);
    console.log(values);
  }, [tim
  return 1;
};
export default useDate;
