import React, { Component } from 'react';
import './cell.css';

export default class Cell extends Component {
  constructor() {
    super();
  }

  render() {
    const el = this.props.value ? 'active' : '';
    return(
      <div className={"cell " + el}>{this.props.index}</div>
    )
  }
}
