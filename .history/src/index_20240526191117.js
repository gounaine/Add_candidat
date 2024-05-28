import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Person from './Persone';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

    <Person firstName="mouad" >Hello</Person>
    <Person firstName="lahsen" >Hello</Person>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
