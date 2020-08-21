import React from "react";
import { IonItem, IonLabel, IonList, IonText } from "@ionic/react";

function TimePrayerTable({ Timings, Date, City, Location }) {
  return (
    <>
      <IonItem>
        <IonText>
          <h1>
            {Date.readable}, {City}
          </h1>
        </IonText>
      </IonItem>

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
