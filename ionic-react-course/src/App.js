import React, { useState, useEffect } from "react";
import axios from "axios";
import TimePrayerTable from "./TimePrayerTable";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonApp,
  IonPage,
} from "@ionic/react";

function App() {
  const [timePrayer, setTimePrayer] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://api.aladhan.com/timingsByAddress/20-08-2020?address=jakarta&method=5"
      );
      if (res != null) {
        setTimePrayer(res.data.data);
        setShow(true);
      }
    }

    fetchData();

    // return () => {
    //   cleanup;
    // };
  }, []);
  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Jadwal Shalat Syifaina</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {show && (
            <TimePrayerTable
              Timings={timePrayer.timings}
              Date={timePrayer.date}
              Location={timePrayer.meta}
            ></TimePrayerTable>
          )}
        </IonContent>
      </IonPage>
    </IonApp>
  );
}

export default App;
