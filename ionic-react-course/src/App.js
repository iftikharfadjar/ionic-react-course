import React , {useState} from 'react'
import { IonButton, IonToast } from  '@ionic/react'


function App() {
    const [showToast, setShowToast] = useState(false)
    const handleclick = () => {
        setShowToast(!showToast)
    }

    return (
        <div>
            <h1>Hello World</h1>
            <IonButton onClick={handleclick}>Click Me</IonButton>
            <IonToast isOpen={showToast} message="Hi World" />
        </div>
    )
}

export default App
