import { Game } from './Game';
import { Registration } from './Registration';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    player1: '',
    player2: '',
    board: [['', '', ''], ['', '', ''], ['', '', '']]
  };
  handleNewGame = (player1, player2) => {
    this.setState({ player1, player2 });
  };
  handleCellClick = (rowIndex, cellIndex) => {
    const board = this.state.board.map(row => [...row]);
    board[rowIndex][cellIndex] = 'X';
    this.setState({ board });
  };
  render() {
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
        <Registration onNewGame={this.handleNewGame} />
        <Game
          board={this.state.board}
          player1={this.state.player1}
          player2={this.state.player2}
          onCellClicked={this.handleCellClick}
        />
      </div>
    );
  }
}

export default App;
