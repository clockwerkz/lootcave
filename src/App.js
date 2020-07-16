import React, { useState } from 'react';
import './App.css';
import largestCollection from './utilities/findLargest';

function App() {
  const arr = [8,2,1,9,1,1,9];
  const calculatedArr = largestCollection(arr);
  return (
    <div className="App">
      <h1>Loot Cave</h1>
  <p>Array to be calculated: <span>{arr.join(',')}</span></p>
  <p>Array of the largest non consecutive numbers: <span>{calculatedArr.join(',')}</span></p>
  <p>Total Sum: <span>{calculatedArr.reduce((acc, el)=> acc+=el, 0)}</span></p>
    </div>
  );
}

export default App;
