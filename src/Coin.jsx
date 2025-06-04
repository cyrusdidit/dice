import React, { useState } from 'react';
import './Coin.css';
import headsImg from './assets/coin/heads.jpg';
import tailsImg from './assets/coin/tails.jpg';

function Coin() {
  const [side, setSide] = useState(() => (Math.random() < 0.5 ? 'heads' : 'tails'));

  function flipCoin() {
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    setSide(result);
  }

  return (
    <article className="coin">
      <h2>Coin Flip 🪙</h2>

      {/* Always show an image */}
      <img
        src={side === 'heads' ? headsImg : tailsImg}
        alt={side}
        className="coin-img"
      />

      <button onClick={flipCoin}>Flip</button>
    </article>
  );
}

export default Coin;
