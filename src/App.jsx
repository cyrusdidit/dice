import React from 'react';
import Dice from './Dice';
import Coin from './Coin';
import Flower from './Flower';
import './App.css'; // We'll add styles here

function App() {
  return (
    <div className="components-row">
      <Dice />
      <Coin />
      <Flower />
    </div>
  );
}

export default App;
