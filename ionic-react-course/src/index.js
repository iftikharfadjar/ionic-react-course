import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Petoydanbentang from './Petoydanbentang'

import '@ionic/react/css/core.css'

// const contohArray = ["bentang", "petoy", "bayu"]

const bebe = {
  nama : "hila",
  address : "margahayu",
  photo : process.env.PUBLIC_URL + "avatar.png",
  contohNum : 3,
  contohArray : ["bentangArray", "petoyArray", "bayuArray"]

}
// json -> campuran object array



// variable 
// String -> kalimat/kata dalam petik
// number -> logic, math
// Object
// array


ReactDOM.render(
  <React.StrictMode>
    <Petoydanbentang props2="hi" contohProps={bebe} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
