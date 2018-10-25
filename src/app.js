import React, { Component } from 'react';
import Square from './square';

function randomValue() {
  return Math.floor((Math.random() * 255) / 10) * 10;
}

function randomColor() {
  return {
    red: randomValue(),
    green: randomValue(),
    blue: randomValue()
  };
}

export default class App extends Component {
  constructor() {
    super(...arguments);

    const start = randomColor();
    const goal = randomColor();

    this.state = {
      ...start,
      goal
    };
  }

  render() {
    const { goal, red, green, blue } = this.state;

    return (
      <div className='container'>
        <h1 className='text-center'>Match the Colors!</h1>
        <div className='row'>
          <div className='col-6'>
            <h2 className='text-center'>Expected</h2>
            <Square height={ 100 } width={ 100 } color={ goal }/>
          </div>
          <div className='col-6'>
            <h2 className='text-center'>Actual</h2>
            <Square height={ 100 } width={ 100 } color={ { red, green, blue } }/>
          </div>
        </div>
      </div>
    );
  }
}
