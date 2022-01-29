import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Switch, Link, useNavigate } from "react-router-dom";

export default function NavigationBar(props) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/characters">CharactersPage</Link>
        </li>
      </ul>
    </div>
  );
};