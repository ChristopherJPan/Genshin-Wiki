import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from './App';

render(
  <Provider>
    helloo!!!
    <App />
  </Provider>,
  document.getElementById("app")
);