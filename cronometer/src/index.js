import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import * as serviceWorker from './serviceWorker';

const Tiempo = false;
let Num1= 0;
let Num2= 0;
let Num3= 0;
let Num4= 0;
let Num5= 0;
let Num6= 0;

setInterval(function(){
    if(Tiempo === false){
        Num6 += 1; 
    };
    if(Tiempo === false && Num6 === 10){
        Num5 += 1
        Num6 = 0
    };
    if(Tiempo === false && Num5 === 10){
        Num4 += 1
        Num5 = 0
    };
    if(Tiempo === false && Num4 === 10){
        Num3 += 1
        Num4 = 0
    };
    if(Tiempo === false && Num3 === 10){
        Num2 += 1
        Num3 = 0
    };
    if(Tiempo === false && Num2 === 10){
        Num1 += 1
        Num2 = 0
    };
    if(Tiempo === false && Num1 === 10){
        Num6 += 1
        Num1 = 0
    };
    
    
    ReactDOM.render(
    <App Num1={Num1} Num2={Num2} Num3={Num3} Num4={Num4} Num5={Num5} Num6={Num6}/>,
      document.getElementById('root')
    );

}, 1000);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
