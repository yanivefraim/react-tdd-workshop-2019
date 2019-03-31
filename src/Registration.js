import React, { Component } from 'react';

export class Registration extends Component {
  state = {
    player1: '',
    player2: ''
  };
  render() {
    return (
      <div>
        <input
          data-hook="p1-input"
          onChange={evt =>
            this.setState({
              player1: evt.target.value
            })
          }
        />
        <input
          data-hook="p2-input"
          onChange={evt =>
            this.setState({
              player2: evt.target.value
            })
          }
        />
        <button
          data-hook="new-game"
          onClick={() =>
            this.props.onNewGame(this.state.player1, this.state.player2)
          }
        >
          new game
        </button>
      </div>
    );
  }
}
