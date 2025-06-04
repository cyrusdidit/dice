import React, { useState } from 'react';
import './Flower.css';

function Flower() {
  const [petals, setPetals] = useState(() => {
    const count = Math.floor(Math.random() * 8) + 5; // 5–12 petals
    return Array.from({ length: count }, (_, i) => i);
  });

  const [picked, setPicked] = useState(0);

  function pickPetal() {
    if (picked < petals.length) {
      setPicked(picked + 1);
    }
  }

  const showResult = picked === petals.length;
  const loves = (picked - 1) % 2 === 0;

  return (
    <article className="flower">
      <h2>Flower 🌹</h2>
      <button onClick={pickPetal} disabled={showResult}>
        Pick a petal
      </button>
      <div className="petals">
        {petals.map((_, i) => (
          <span key={i} className={`petal ${i < picked ? 'picked' : ''}`}>
            {i % 2 === 0 ? '🌹' : '🌹'}
          </span>
        ))}
      </div>

      {showResult && (
        <p className="result">
          {loves ? 'They love me ❤️' : 'They love me not 💔'}
        </p>
      )}
    </article>
  );
}

export default Flower;
