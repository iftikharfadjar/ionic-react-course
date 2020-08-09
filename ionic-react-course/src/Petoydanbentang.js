import React, {useState}  from 'react'
import {IonButton} from '@ionic/react'

export default function Petoydanbentang(props) {
    

    var test = {
                nama : "patrick star",
                muncul : false 
              } 
    


    function changeName() {
       
        test.nama ="test"
        test.muncul = true
    }
    

    return (
        <div style={{color: "red"}}>
            <h1>{props.props2} bentang</h1>
            <h1>{props.contohProps.nama}</h1>
            <h1>{props.contohProps.address}</h1>
            <h1>{props.contohProps.contohNum + 2}</h1>
            <h1>{props.contohProps.contohArray[0]}</h1>
            {/* <img src={props.contohProps.photo}></img>  */}
            {/* <h1>{Number(props.contohProps) + Number(2)}</h1>
            {/* <h1> {props.contohProps[0]} </h1>
            <h1> {props.contohProps[1]} </h1>
            <h1> {props.contohProps[2]} </h1> */}
            <h1>This is heading 1</h1>
            <IonButton onClick={changeName}>{test.nama}</IonButton>
            {test.muncul && <h1>baaa</h1>}
            {console.log(test)}
        </div>
    )
}

 
