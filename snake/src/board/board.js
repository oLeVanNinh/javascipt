import React, { Component } from 'react';
import './board.css'
import Cell from '../cell/cell';

export default class Board extends Component {
  constructor() {
    super();
    this.state = {
      board: [...Array(9)].map(e => Array(9).fill(null)),
      snake: [[1,2]]
    }

    this.pointInSnake = this.pointInSnake.bind(this);
    this.transformCoordinate = this.transformCoordinate.bind(this);
  }

  componentDidMount() {
    let newSnake = this.state.snake;

    setInterval(() => {
      newSnake = newSnake.map((e) => {
        return this.transformCoordinate(e, 9);
      })

      this.setState({snake: newSnake});
    }, 500)
  }

  transformCoordinate(point, direction) {
    switch (direction) {
      case 1:
        point[1] += point[1] + 1 > 8 ? -8 : 1
        break;
      case -1:
        point[1] += point[1] - 1 < 0 ? 8 : -1
        break;
      case 9:
        point[0] += point[0] + 1 > 8 ? -8 : 1
        break;
      case -9:
          point[0] += point[0] - 1 < 0 ? 8 : -1
        break;
    }

    return point;
  }

  pointInSnake(point) {
    return this.state.snake.filter(e => e[0] === point.x && e[1] === point.y ).length > 0;
  }

  render() {
    const board = this.state.board;
    return(
      <div className="board-game">
        { board.map((a, i) =>
          a.map((e, j) =>
            <Cell key={`${i}${j}`} value={this.pointInSnake({x: i, y: j})} index={`${i}${j}`}/>)
        )}
      </div>
    )
  }
}
