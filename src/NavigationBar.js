import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Switch, Link } from "react-router-dom";


const NavigationBar = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/characters">CharactersPage</Link></li>
        </ul>
      </nav>
    </div>
   
  );
};


export default NavigationBar;
