import React, { useState } from 'react';
import { Game } from './Game';
import { Registration } from './Registration';
import { gameStatus } from './gameService';
import logo from './logo.svg';
import './App.css';

export function App() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
  const [winner, setWinner] = useState('');

  const handleNewGame = (_player1, _player2) => {
    setPlayer1(_player1);
    setPlayer2(_player2);
  };
  const handleCellClick = (rowIndex, cellIndex) => {
    const _board = board.map(row => [...row]);
    _board[rowIndex][cellIndex] = 'X';
    if (gameStatus(_board) === 'X') {
      setWinner('X');
    }
    setBoard(_board);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Registration onNewGame={handleNewGame} />
      <Game
        board={board}
        player1={player1}
        player2={player2}
        onCellClicked={handleCellClick}
      />
      {winner && <div data-hook="winner">Yaniv won!!!</div>}
    </div>
  );
}

export default App;
