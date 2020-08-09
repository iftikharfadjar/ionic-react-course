import React , {useState} from 'react'
import {IonButton,IonButtons, IonIcon, IonLabel, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet} from  '@ionic/react'
import {search, personCircle, mail, paperPlane, heart, trash, archive, warning } from 'ionicons/icons';


function AppMenu() {
    return (
        <>
        <IonMenu side="start" open={true} content-id="main-content"> 
            <IonHeader>
            <IonToolbar translucent> <IonButtons slot="secondary">
                <IonButton>
                  <IonIcon slot="icon-only" icon={personCircle} />
                </IonButton>
                <IonButton>
                  <IonIcon slot="icon-only" icon={search} />
                </IonButton>
              </IonButtons>
              <IonButtons slot="primary">
                <IonButton color="secondary">
                  <IonIcon slot="icon-only" />
                </IonButton>
              </IonButtons>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem>
                <IonIcon icon={mail} slot="start"></IonIcon>
                <IonLabel>Inbox</IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon icon={paperPlane} slot="start"></IonIcon>
                <IonLabel>Outbox</IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon icon={heart} slot="start"></IonIcon>
                <IonLabel>Favorites</IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon icon={archive} slot="start"></IonIcon>
                <IonLabel>Archived</IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon icon={trash} slot="start"></IonIcon>
                <IonLabel>Trash</IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon icon={warning} slot="start"></IonIcon>
                <IonLabel>Spam</IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonMenu>
        <IonRouterOutlet  id="main-content"></IonRouterOutlet>

            
        </>


    )
}

export default AppMenu
