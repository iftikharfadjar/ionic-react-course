import React from 'react'
import {IonIcon, IonPage,IonHeader,IonToolbar, IonButtons,IonMenuButton, IonTitle, IonContent,IonMenuToggle, IonButton, IonToast, IonApp } from  '@ionic/react'
import axios from 'axios'
import Users from './Users.js'
import AppMenu from './AppMenu'
import Petoydanbentang from './Petoydanbentang'
import { helpCircle ,search, personCircle, mail, paperPlane, heart, trash, archive, warning } from 'ionicons/icons';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users:[],
            showToast: false
          }

        // This binding is necessary to make `this` work in the callback
        this.handleclick = this.handleclick.bind(this);
      }

    //   Lifecycle method
    async componentDidMount(){
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.setState({ users: res.data });
        console.log(this.state)
    }
    
      handleclick() {
        this.setState(state => ({...state, 
            showToast: !state.showToast
        }));
      }
 
      render(){
        return (
            <IonApp>
                <AppMenu></AppMenu>
               <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        {/* <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons> */}
                        <IonButtons slot="end">
                        <IonButton>
                            Home
                        </IonButton>
                        <IonButton>
                            About
                        </IonButton>
                        </IonButtons>
                       
                        <IonTitle>Inbox</IonTitle>
                        <IonButtons slot="primary">
                        <IonButton fill="solid" color="secondary">
                            Help
                            <IonIcon slot="end" icon={helpCircle} />
                        </IonButton>
                        </IonButtons>
                        
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                <h1>Hello World</h1>
                <Petoydanbentang></Petoydanbentang>
                <IonButton onClick={this.handleclick}>Click Me</IonButton>
                <IonToast isOpen={this.state.showToast} message="Hi World" />
                <IonMenuToggle>
                    <IonButton >Open Menu</IonButton>
                </IonMenuToggle>

                {this.state.showToast &&  <Users users={this.state.users}></Users>}

                {/* {this.state.showToast && this.state.users.map(user => (
                    <div key={user.name}>
                        <IonLabel>{user.name}</IonLabel>
                    </div>
                )) } */}
               
              
                </IonContent>
            </IonPage>


                
         
            </IonApp>
        )
    }
}

export default App
