import React, { Component } from 'react';
import Board from '../board/board';
import Controls from "../controls/controls";
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      direction: {dir: 1, group: 0}
    }

    this.changeDirection = this.changeDirection.bind(this);
  }

  changeDirection(dir, group) {
    if (group !== this.state.direction.group && dir !== this.state.direction.dir) {
      let direction = {dir: dir, group: group}
      this.setState({ direction: direction});
    }
  }

  render() {
    return (
        <div>
          <Board />
          <Controls onClick={this.changeDirection} />
        </div>

    );
  }
}

export default App;
