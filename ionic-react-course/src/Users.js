import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import '@ionic/core/css/core.css';
// import '@ionic/core/css/ionic.bundle.css';



import {
  IonContent,
  IonRow,
  IonGrid,
  IonCol,
  IonCard,
  IonItem,
  IonAvatar,
  IonLabel,
  IonButton
} from '@ionic/react';


//=================================================================
//          STATELESS FUNCTIONAL COMPONENT
//=================================================================
const Users = ({users}) => {

      return (
      <>
         <IonContent>
          <IonGrid Fixed>
            <IonRow>
                {users.map(user => (
                  <IonCol  size-lg="3" size-md="4" size-sm="6" size-xs="12" key={user.id}>
                      <IonCard >
                        <IonItem>
                            <IonAvatar slot='start'>
                            <img src={process.env.PUBLIC_URL + "avatar.png"} />
                            </IonAvatar >
                            <IonLabel>
                              <h1>{user.name}</h1>
                              <IonButton color="dark">more..</IonButton>
                            </IonLabel>
                          </IonItem>
                      </IonCard>



                  </IonCol>
                ))}

            </IonRow>
          </IonGrid>
       </IonContent>
      </>
     );
   
  
}

//=================================================================
//          CLASS COMPONENT
//=================================================================
// class Users extends Component {
// //data sample
// //   constructor(){
// //     super();
// //     this.state = {
// //       users : props.users
// //       users: [
// //         {
// //           id: '1',
// //           login: 'mojombo',
// //           avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
// //           html_url:"https://github.com/mojombo"
// //         },
// //         {
// //           id: '2',
// //           login: "defunkt",
// //           avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
// //           html_url: "https://github.com/defunkt",
// //         },
// //         {
// //           login: "pjhyett",
// //           id: '3',
// //           avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
// //           html_url: "https://github.com/pjhyett",
// //         }
// //       ]
// //     }
// //   }
  
//   render(){
//     //for re-variable of this.state
//     return (
//     <>
//        <IonContent>
//         <IonGrid Fixed>
//           <IonRow>
//               {this.props.users.map(user => (
//                 <IonCol  size-lg="3" size-md="4" size-sm="6" size-xs="12" key={user.id}>
//                     <UserItem user={user}/>
//                 </IonCol>
//               ))}
   
//           </IonRow>
//         </IonGrid>
//      </IonContent>
//     </>
//    );
//   }
// }


export default Users