import React, { Component, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CharacterLink = (props) => {
  // const [characters, setCharacters] = useState([]);

  // useEffect(async () => {
  // let { name } = useParams(); 
  // }, []);
  console.log('character', props.name);

  return (
    <div>
      {/* character name, route to character page, picture eventually, fetch
      specific character information, display character information */}
      {/* {props.char} */}
      <Link to={`/characterpage/${props.name}`} >{props.name}</Link>

    </div>
  );
};

export default CharacterLink;
