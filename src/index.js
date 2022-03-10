import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Navbar from "./Navbar"
import About from "./About"
import ActualWallet from "./ActualWallet"
import DreamWallet from "./DreamWallet"



ReactDOM.render(
  <BrowserRouter>
  <Navbar />
  <Switch>
    <Route exact path="/About">
      <About />
    </Route>
    <Route exact path="/ActualWallet">
      <ActualWallet />
    </Route>
    <Route exact path="/DreamWallet">
      <DreamWallet />
    </Route>
  </Switch>
</BrowserRouter>,
  document.getElementById('root')
);

