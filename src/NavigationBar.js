import React, { Component } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

export default function NavigationBar(props) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/characterslist">CharactersList</Link>
        </li>
      </ul>
    </div>
  );
};