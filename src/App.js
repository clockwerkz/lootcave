import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom'

//Components
import Nav from './components/Nav';
import Instructions from './components/Instructions';
import Landing from './components/Landing';
import Game from './components/Game';
import Footer from './components/Footer';
//Utilities
import largestCollection from './utilities/findLargest';

function App() {
  const arr = [8,2,1,9,1,1,9];
  const calculatedArr = largestCollection(arr);
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route path="/instructions" component={Instructions} />
      <Route path="/game" component={Game} />
      <Footer />
    </Router>
  );
}

export default App;
