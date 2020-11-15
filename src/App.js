import React from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';

import { Home } from './Pages/Home';
import { Rooms } from './Pages/Rooms';
import { SingleRoom } from './Pages/SingleRoom';

import { Navbar } from "./components/Navbar";

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
    <Navbar />
        <Route path="/" key="/" exact >
        {({ match }) => (
          <CSSTransition
          in={match != null}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
           <div className="page">
          <Home />
           </div>
          </CSSTransition>
          )}
          </Route>
        <Route path="/rooms" key="/rooms" exact>
          {({ match }) => (
          <CSSTransition
          in={match != null}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
         
           <div className="page">
              <Rooms />
            </div>
          </CSSTransition>
          )}
        </Route>
        <Route path="/rooms/:id" exact component={SingleRoom} />
    </div>
  );
}

export default App;
