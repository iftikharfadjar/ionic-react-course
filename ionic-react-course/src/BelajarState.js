import React, { useState } from "react";
import { initialData } from "./initialData";
import CardUser from "./CardUser";
import { IonButton } from "@ionic/react";

function BelajarState() {
  const [stateSample, setStateSample] = useState(initialData);
  const [tombolTampil, setTombolTampil] = useState(false);

  const tampil = () => {
    setTombolTampil(!tombolTampil);
    setStateSample([
      ...stateSample,
      stateSample.map((data) => (data.name = "tes")),
    ]);
  };

  return (
    <div>
      <IonButton onClick={tampil}> Tampilkan </IonButton>
      {tombolTampil &&
        stateSample.map((dat) => {
          return <CardUser key={dat.id} dataUser={dat}></CardUser>;
        })}
    </div>
  );
}

export default BelajarState;
