import React from "react";
import {
  IonItem,
  IonLabel,
  IonList,
  IonItemGroup,
  IonText,
  IonItemSliding,
  IonItemDivider,
} from "@ionic/react";

function TimePrayerTable({ Timings, Date, City, Location }) {
  return (
    <>
      <IonItemSliding>
        <IonItemDivider>
          <IonLabel>
            {Date.readable}, {City}
          </IonLabel>
        </IonItemDivider>
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
      </IonItemSliding>
    </>
  );
}

export default TimePrayerTable;
