import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDcrssKCnV-kaGI9ADBlS6pR2pgO8vgDQo",
    authDomain: "react-app-97407.firebaseapp.com",
    databaseURL: "https://react-app-97407.firebaseio.com",
    projectId: "react-app-97407",
    storageBucket: "",
    messagingSenderId: "1032226466083",
    appId: "1:1032226466083:web:e439d94a94349b7a"
  };

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
