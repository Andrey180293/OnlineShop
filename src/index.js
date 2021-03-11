import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App_Container from "./containers/App_Container";
import store from "./store/store";
import { Provider } from "react-redux";
//import * as firebase from "firebase";
import firebase from "firebase/app";
import getFirestore from "redux-firestore";
import getFirebase from "react-redux-firebase";
import { BrowserRouter as Router } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyCGoHN3ITvVMyvQSo2f_lG748FAxBlLeOw",
  authDomain: "myshopdb-6f084.firebaseapp.com",
  databaseURL: "https://myshopdb-6f084-default-rtdb.firebaseio.com",
  projectId: "myshopdb-6f084",
  storageBucket: "myshopdb-6f084.appspot.com",
  messagingSenderId: "463751551744",
  appId: "1:463751551744:web:8d087abd5153c18fe831e5",
  measurementId: "G-63L3P732L7",
};

firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App_Container />
      </Provider>
    </React.StrictMode>
    ,
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
