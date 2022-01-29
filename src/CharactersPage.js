import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import CharacterLink from "./CharacterLink";

const CharactersPage = (props) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://api.genshin.dev/characters")
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .then((res) => console.log('characters:', characters));
  }, []);
  // useEffect(() => { }, [characters]);

  const charLink = characters.map((ele, i) => {
    return <CharacterLink key={`cLink${i}`} char={ele}/>
  });

  return (
    <div>
      character name, route to character page, picture eventually, fetch specific character information, display character information
      {/* <characterlink /> */}
      {charLink}
    </div>
  );
};

export default CharactersPage;
