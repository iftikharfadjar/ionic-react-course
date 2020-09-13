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
  IonItem,
  IonInput,
  IonButton,
  IonDatetime,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import dayjs from "dayjs";

const formatDate = (isoString) => {
  return dayjs(isoString).format("DD-MM-YYYY");
};

function App() {
  const [timePrayer, setTimePrayer] = useState();
  const [update, setUpdate] = useState();
  const [today, setToday] = useState();
  const [location, setLocation] = useState({
    setting: "jakarta",
    updateLoc: "jakarta",
  });

  useEffect(() => {
    async function fetchData() {
      const now = dayjs(new Date());
      setToday(now.toISOString());
      const res = await axios.get(
        `https://api.aladhan.com/timingsByAddress/${formatDate(
          today
        )}?address=${location.updateLoc}&method=5`
      );
      if (res != null) {
        setTimePrayer(res.data.data);
        setLocation({ ...location, setting: location.updateLoc });
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
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">
            Jadwal Shalat Syifaina
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonInput
            value={location.updateLoc}
            onIonChange={(e) =>
              setLocation({ ...location, updateLoc: e.detail.value })
            }
            placeholder="Nama Kota"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonDatetime
            value={today}
            onIonChange={(event) => setToday(event.detail.value)}
          ></IonDatetime>
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
        <IonCard>
          <IonCardContent className="ion-text-center">
            {update && (
              <TimePrayerTable
                Timings={timePrayer.timings}
                Date={timePrayer.date}
                City={location.setting}
                Location={timePrayer.meta}
              ></TimePrayerTable>
            )}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonApp>
  );
}

export default App;
