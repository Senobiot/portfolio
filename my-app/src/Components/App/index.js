import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navigation, Route } from "react-tiger-transition";
import Home from './../Home'
import About from './../About'
import Works from './../Works'
import { DetailScreen } from './../Works'

import './style.css'
import "react-tiger-transition/styles/main.min.css";

const App = () => (
  <BrowserRouter>
    <Navigation>
      <Route exact path="/" component={Home}>
        <Home />
      </Route>
      <Route exact path={'/About'} component={About}>
        <About />
      </Route>
      <Route exact path="/Works" component={About}>
        <Works />
      </Route>
      <Route exact path="/detail/:work" component={DetailScreen}>
        <DetailScreen />
      </Route>
    </Navigation>
  </BrowserRouter>
);
export default App;
