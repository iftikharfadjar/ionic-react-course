import React from "react";
import { IonCard, IonItem, IonAvatar, IonLabel, IonButton } from "@ionic/react";

function CardUser(props) {
  return (
    <>
      <IonCard>
        <IonItem>
          <IonAvatar slot="start">
            <img src={process.env.PUBLIC_URL + "avatar.png"} />
          </IonAvatar>
          <IonLabel>
            <h1>{props.dataUser.name}</h1>
            <h4>{props.dataUser.email}</h4>
            <IonButton color="dark">more..</IonButton>
          </IonLabel>
        </IonItem>
      </IonCard>
    </>
  );
}

export default CardUser;
