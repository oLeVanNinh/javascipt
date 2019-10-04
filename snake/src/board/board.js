import React, { Component } from 'react';
import './board.css'
import Cell from '../cell/cell';

export default class Board extends Component {
  constructor() {
    super();
    this.state = {
      board: [...Array(81)],
      snake: [1]
    }
  }

  componentDidMount() {
    setInterval(() => {
      let state = this.state.snake.map(v => {
       return v + 1 > 8 ? v - 8 : v + 1
      });
      console.log(state)
      this.setState({
        snake: state
      })
    }, 500)
  }

  render() {
    const board = this.state.board;
    return(
      <div className="board-game">
        { board.map((e, i) =>
          <Cell key={i} active={this.state.snake.includes(i) ? "active" : ""} />
        )}
      </div>
    )
  }
}
