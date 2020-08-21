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
  IonList,
  IonItem,
  IonInput,
  IonButton,
} from "@ionic/react";
import dayjs from "dayjs";

const formatDate = (isoString) => {
  return dayjs(isoString).format("DD-MM-YYYY");
};

function App() {
  const [timePrayer, setTimePrayer] = useState();
  const [update, setUpdate] = useState(false);
  const [today, setToday] = useState();
  const [location, setLocation] = useState("jakarta");

  useEffect(() => {
    async function fetchData() {
      const now = dayjs(new Date());
      setToday(now.toISOString());
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

    // return () => {
    //   cleanup;
    // };
  }, [update]);
  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Jadwal Shalat Syifaina</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              <IonInput
                value={location}
                onIonChange={(e) => setLocation(e.detail.value)}
                placeholder="Nama Kota"
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonButton
                onClick={() => {
                  setUpdate(false);
                }}
              >
                Jadwal Shalat
              </IonButton>
            </IonItem>
          </IonList>

          {update && (
            <TimePrayerTable
              Timings={timePrayer.timings}
              Date={timePrayer.date}
              City={location}
              Location={timePrayer.meta}
            ></TimePrayerTable>
          )}
        </IonContent>
      </IonPage>
    </IonApp>
  );
}

export default App;
