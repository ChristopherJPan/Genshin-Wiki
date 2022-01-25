import React, { Component } from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import NavigationBar from './NavigationBar.js';
import Home from './Home.js';
import CharactersPage from './CharactersPage.js';

const App = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/characters">CharactersPage</Link></li>
        </ul>
      </nav>

      <Routes>
        {/* <Routes path="/" element={<NavigationBar />}/> */}
          <Route index element={<Home />} />
          <Route path="characters" element={<CharactersPage />} />
      </Routes>
    </div>
  );
}


export default App;
