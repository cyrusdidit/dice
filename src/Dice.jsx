import React, { useState } from 'react';
import './Dice.css';

import dice1 from "./assets/dice/dice-1.svg";
import dice2 from "./assets/dice/dice-2.svg";
import dice3 from "./assets/dice/dice-3.svg";
import dice4 from "./assets/dice/dice-4.svg";
import dice5 from "./assets/dice/dice-5.svg";
import dice6 from "./assets/dice/dice-6.svg";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  const [value, setValue] = useState(() => Math.floor(Math.random() * 6) + 1);

  function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setValue(randomNumber);
    console.log("Kauliņš izmests: " + randomNumber);
  }

  return (
    <article className="dice">
      <h2>Dice</h2>

      {/* Always show the image */}
      <img
        src={diceImages[value - 1]}
        alt={`Metamais kauliņš ${value}`}
      />

      <button onClick={rollDice}>Mest</button>
    </article>
  );
}

export default Dice;
