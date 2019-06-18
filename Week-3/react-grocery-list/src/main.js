import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

let groceryData = [
  { id: 1, name: "Oranges" },
  { id: 2, name: "Bananas" },
  { id: 3, name: "Bread" }
];

ReactDOM.render(
  <App
    data = {groceryData}
  />,
  document.getElementById('app')
);
