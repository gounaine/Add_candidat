import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Person from './person';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Person firstName={"lahcen"} lastName={"gounaine"} Age={18}>En cours</Person>
    <Person firstName={"Mourad"} lastName={"sahi"} Age={29}>succes</Person>
    <Person firstName={"Ayman"} lastName={"Intell"} Age={23}>failed</Person>
    <Person firstName={"Alex"} lastName={"gerrard"} Age={17}>En cours</Person>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
