import React, { Component } from 'react';
import {
  Routes,
  Route,
  useParams,
  Link
} from "react-router-dom";
import NavigationBar from './NavigationBar.js';
import Home from './Home.js';
import CharactersList from './CharactersList.js';
import CharacterPage from './CharacterPage.js';

const App = (props) => {
  let { username } = useParams();
  return (
    <div>
      <NavigationBar/>
      <Routes>
        {/* <Routes path="/" element={<NavigationBar />}/> */}
        <Route index element={<Home />} />
        <Route path="/characterslist" element={<CharactersList />} />
        <Route path="/characterpage/:name" element={<CharacterPage />} />
        {/* <Route path="*" element={<ErrorPaage />}/> */}
      </Routes>
    </div>
  );
}


export default App;
