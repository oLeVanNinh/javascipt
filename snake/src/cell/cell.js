import React, { Component } from 'react';
import './cell.css';

export default class Cell extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className={"cell " + this.props.active }>*</div>
    )
  }
}
