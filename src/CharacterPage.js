import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

const CharacterLink = (props) => {
  // const [characters, setCharacters] = useState([]);

  // useEffect(async () => {
  //   /*

  //   */

  //   fetch("https://api.genshin.dev/characters")
  //     .then((response) => response.json())
  //     .then((data) => setCharacters(data))
  //     .then((res) => console.log("characters:", characters));
  // }, []);
  // // useEffect(() => { }, [characters]);

  return (
    <div>
      {/* character name, route to character page, picture eventually, fetch
      specific character information, display character information */}
      {props.char}
      <link></link>
    </div>
  );
};

export default CharacterLink;
