import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navigation, Route } from "react-tiger-transition";
import Home from './../Home'
import About from './../About'
import WorkCategories from './../WorkCategories'
import { DetailScreen } from './../Works'

import './style.css'
import "react-tiger-transition/styles/main.min.css";

const App = () => {
  const [category, setCategory] = useState(0);
  const categoryHandler = (number) => setCategory(number);

  return (
    <BrowserRouter>
      <Navigation>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route exact path={'/About'} component={About}>
          <About />
        </Route>
        <Route exact path="/works" component={WorkCategories}>
          <WorkCategories categoryHandler={categoryHandler} category={category}/>
        </Route>
        <Route exact path="/works/:work" component={DetailScreen}>
          <DetailScreen />
        </Route>
      </Navigation>
    </BrowserRouter>
  );
}
export default App;
