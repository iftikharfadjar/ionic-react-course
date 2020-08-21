import React from "react";
import { IonItem, IonLabel, IonList } from "@ionic/react";

function TimePrayerTable({ Timings, Date, Location }) {
  return (
    <>
      <h1>
        {Date.readable}, {Location.timezone}
      </h1>
      <IonList>
        <IonItem>
          <IonLabel>Shubuh : {Timings.Fajr}</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Dzuhur : {Timings.Dhuhr}</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Ashar : {Timings.Asr}</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Maghrib : {Timings.Maghrib}</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Isya : {Timings.Isha}</IonLabel>
        </IonItem>
      </IonList>
    </>
  );
}

export default TimePrayerTable;
