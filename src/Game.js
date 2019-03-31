import React from 'react';
export function Game({ player1, player2 }) {
  return (
    <div>
      <h1 data-hook="p1-title">{player1}</h1>
      <h1 data-hook="p2-title">{player2}</h1>
    </div>
  );
}
