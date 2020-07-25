import React from 'react'
import { IonButton, IonToast, IonLabel } from  '@ionic/react'
import axios from 'axios'
import Users from './Users.js'



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
            <div>
               
                <h1>Hello World</h1>
                <IonButton onClick={this.handleclick}>Click Me</IonButton>
                <IonToast isOpen={this.state.showToast} message="Hi World" />
                {this.state.users.map(user => (
                    <div key={user.name}>
                        <IonLabel>{user.name}</IonLabel>
                    </div>
                )) }
         
            </div>
        )
    }
}

export default App
