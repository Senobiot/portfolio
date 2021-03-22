import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navigation, Route } from "react-tiger-transition";
import { Home } from '../'
import { About } from '../'
import { WorkCategories } from '../'
import { DetailScreen } from '../'

import './reset.css'
import "react-tiger-transition/styles/main.min.css";

const App = () => {
  const [category, setCategory] = useState(0);
  const categoryHandler = (number) => setCategory(number);

  return (
    <BrowserRouter>
      <Navigation>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path='/About'>
          <About />
        </Route>
        <Route exact path='/works'>
          <WorkCategories categoryHandler={categoryHandler} category={category}/>
        </Route>
        <Route exact path='/works/:work'>
          <DetailScreen />
        </Route>
      </Navigation>
    </BrowserRouter>
  );
}

export default App;
