import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [timePrayer, setTimePrayer] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://api.aladhan.com/timingsByAddress/20-08-2020?address=jakarta&method=5"
      );
      if (res != null) {
        setTimePrayer({ time: res.data.data });
        setShow(true);
      }
    }

    fetchData();

    // return () => {
    //   cleanup;
    // };
  }, []);
  return <div>{show && timePrayer.time.timings.Fajr}</div>;
}

export default App;
