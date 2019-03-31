import React from 'react';
export function Game({ player1, player2, board, onCellClicked }) {
  return (
    <div>
      <h1 data-hook="p1-title">{player1}</h1>
      <h1 data-hook="p2-title">{player2}</h1>
      <table>
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  onClick={() => onCellClicked(rowIndex, cellIndex)}
                  key={cellIndex}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
