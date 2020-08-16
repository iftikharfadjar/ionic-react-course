import React, { useState } from "react";
import { IonButton } from "@ionic/react";
import { initialData } from "./initialData";

//jadul
// function tambah(a, b) {
//   return a + b;
// }
// //masukin function ke variabel
// const tambah2 = tambah;
// const kurang = function (a, b) {
//   return a - b;
// };

// //es6 arrow function
// //no "function"
// //no "return"
// const plus = (a, b) => a + b;
// const ganteng = (gue) => gue + " ganteng";

// //arrow function with return
// const minus = (a, b) => {
//   return a - b;
// };

// const hasilMap = initialData.map((data) => {
//   return data.name;
// });

const hasilFilter = initialData.filter((data) => data.id === 1);

// export default Petoydanbentang(props){
const Petoydanbentang = (props) => {
  var test = {
    nama: "patrick star",
    muncul: false,
  };

  function changeName() {
    test.nama = "test";
    test.muncul = true;
  }

  return (
    //contoh variable
    // <div style={{color: "red"}}>
    //     <h1>{props.props2} bentang</h1>
    //     <h1>{props.contohProps.nama}</h1>
    //     <h1>{props.contohProps.address}</h1>
    //     <h1>{props.contohProps.contohNum + 2}</h1>
    //     <h1>{props.contohProps.contohArray[0]}</h1>
    //     {/* <img src={props.contohProps.photo}></img>  */}
    //     {/* <h1>{Number(props.contohProps) + Number(2)}</h1>
    //     {/* <h1> {props.contohProps[0]} </h1>
    //     <h1> {props.contohProps[1]} </h1>
    //     <h1> {props.contohProps[2]} </h1> */}
    //     <h1>This is heading 1</h1>
    //     <IonButton onClick={changeName}>{test.nama}</IonButton>
    //     {test.muncul && <h1>baaa</h1>}
    //     {console.log(test)}
    // </div>

    //contoh function
    // <div>
    //   <div> tambah= {tambah(2, 4)}</div>
    //   <div> tambah2= {tambah2(2, 5)}</div>
    //   <div> kurang= {kurang(4, 4)}</div>
    //   <div> plus= {plus(4, 4)}</div>
    //   <div> minus= {minus(8, 4)}</div>
    //   <div> {ganteng("om")}</div>
    // </div>

    <div>
      {initialData.map((dat) => {
        return (
          <div>
            <h1>{dat.name}</h1>
            <h4>{dat.address.street}</h4>
          </div>
        );
      })}

      <h1>{hasilFilter.map((data) => data.name)}</h1>
      {/* {hasilMap} */}
    </div>
  );
};

export default Petoydanbentang;
