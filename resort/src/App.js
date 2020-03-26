import React from 'react';
import './App.css';

import { Home } from './Pages/Home';
import { Rooms } from './Pages/Rooms';
import { SingleRoom } from './Pages/SingleRoom';
import { Error } from './Pages/Error';

import { Navbar } from "./components/Navbar";

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={Rooms} />
        <Route path="/rooms/:id" exact component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
