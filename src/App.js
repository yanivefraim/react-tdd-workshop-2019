import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    player1: '',
    player2: ''
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
        <div>
          <input
            data-hook="p1-input"
            onChange={evt => this.setState({ player1: evt.target.value })}
          />
          <input
            data-hook="p2-input"
            onChange={evt => this.setState({ player2: evt.target.value })}
          />
          <button data-hook="new-game">new game</button>
        </div>
        <div>
          <h1 data-hook="p1-title">{this.state.player1}</h1>
          <h1 data-hook="p2-title">{this.state.player2}</h1>
        </div>
      </div>
    );
  }
}

export default App;
