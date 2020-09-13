import React, { useState, useEffect } from "react";
import {
  IonButton,
  IonInput,
  IonCard,
  IonItemDivider,
  IonDatetime,
} from "@ionic/react";
import axios from "axios";
import TimePrayerTable from "./TimePrayerTable";
import dayjs from "dayjs";

const formatDate = (isoString) => {
  return dayjs(isoString).format("DD-MM-YYYY");
};

function SampleUseEffect() {
  const [timePrayer, setTimePrayer] = useState();
  const [update, setUpdate] = useState(false);
  const [location, setLocation] = useState("denpasar");
  const [today, setToday] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (today === "") {
        const now = dayjs(new Date());
        setToday(now.toISOString());
      }

      const res = await axios.get(
        `https://api.aladhan.com/timingsByAddress/${formatDate(
          today
        )}?address=${location}&method=5`
      );
      if (res != null) {
        setTimePrayer(res.data.data);
        setUpdate(true);
      }
    }

    fetchData();
  }, [update]);

  return (
    <div>
      <IonInput
        onIonChange={(e) => setLocation(e.detail.value)}
        placeholder={location}
      />
      <IonDatetime
        value={today}
        onIonChange={(event) => setToday(event.detail.value)}
      />
      <IonCard>
        <IonButton onClick={() => setUpdate(false)}>ganti lokasi</IonButton>
        {update && (
          <TimePrayerTable
            Timings={timePrayer.timings}
            Date={timePrayer.date}
            Location={timePrayer.meta}
          ></TimePrayerTable>
        )}
      </IonCard>
    </div>
  );
}

export default SampleUseEffect;
