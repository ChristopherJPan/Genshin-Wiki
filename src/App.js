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
      <NavigationBar/>
      <Routes>
        {/* <Routes path="/" element={<NavigationBar />}/> */}
        <Route index element={<Home />} />
        <Route path="characters" element={<CharactersPage />} />
        {/* <Route path="*" element={<ErrorPaage />}/> */}
      </Routes>
    </div>
  );
}


export default App;
