import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NavigationBar from './NavigationBar.js';
import Home from './Home.js';
import CharactersPage from './CharactersPage.js';

const App = (props) => {
  return (
    <Routes>
      <div>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/characters">CharactersPage</Link>
        </nav>
      </div>
    </Routes>
  );
}


export default App;
