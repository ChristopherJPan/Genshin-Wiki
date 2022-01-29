import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

render(
  // <Provider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);