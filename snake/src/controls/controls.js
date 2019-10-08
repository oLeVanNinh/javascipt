import React, { Component } from 'react';

export  default  class Controls extends  Component {
  constructor() {
    super();

    this.funnyBind = this.funnyBind.bind(this);
  }

  funnyBind() {
    console.log('click')
  }

  render() {
    const changeDir = this.props.onClick;
    return (
      <div>
          <button onClick={() => changeDir(-9, 1)}>Up</button>
          <button onClick={() => changeDir(9, 1)}>Down</button>
          <button onClick={() => changeDir(1, 0)}>Left</button>
          <button onClick={() => changeDir(-1, 0)}>Right</button>
      </div>
    )
  }
}
