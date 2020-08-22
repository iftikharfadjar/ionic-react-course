import React, { useState, useEffect } from "react";
import { IonButton } from "@ionic/react";
import axios from "axios";
import TimePrayerTable from "./TimePrayerTable";

function SampleUseEffect() {
  const [timePrayer, setTimePrayer] = useState();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://api.aladhan.com/timingsByAddress/22-08-2020?address=Bekasi&method=5`
      );
      if (res != null) {
        setTimePrayer(res.data.data);
        setUpdate(true);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>
        {console.log(timePrayer)}
        {update && (
          <TimePrayerTable
            Timings={timePrayer.timings}
            Date={timePrayer.date}
            Location={timePrayer.meta}
          ></TimePrayerTable>
        )}
      </h1>
    </div>
  );
}

export default SampleUseEffect;
