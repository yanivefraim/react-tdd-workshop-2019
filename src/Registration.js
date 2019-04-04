import React, { useState } from 'react';

export function Registration({ onNewGame }) {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  return (
    <div>
      <input
        data-hook="p1-input"
        onChange={evt => setPlayer1(evt.target.value)}
      />
      <input
        data-hook="p2-input"
        onChange={evt => setPlayer2(evt.target.value)}
      />
      <button
        data-hook="new-game"
        onClick={() => {
          if (player1 && player2) {
            onNewGame(player1, player2);
          }
        }}
      >
        new game
      </button>
    </div>
  );
}
