import React, { PureComponent } from 'react';
import Square from './square';
import Slider from './slider';

function randomValue() {
  return Math.floor((Math.random() * 255) / 5) * 5;
}

function randomColor() {
  return {
    red: randomValue(),
    green: randomValue(),
    blue: randomValue()
  };
}

export default class App extends PureComponent {
  constructor() {
    super(...arguments);

    const start = randomColor();
    const goal = randomColor();

    this.state = {
      ...start,
      goal
    };

    this.setColor = this.setColor.bind(this);
  }

  setColor(value, color) {
    this.setState({
      [color]: parseInt(value)
    });
  }

  render() {
    const { goal, red, green, blue } = this.state;
    const actual = { red, green, blue };

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
            <Square height={ 100 } width={ 100 } color={ actual }/>
          </div>
        </div>
        <div>
          <Slider color={ 'red' } actual={ actual } onChange={ v => this.setColor(v, 'red') }/>
          <Slider color={ 'green' } actual={ actual } onChange={ v => this.setColor(v, 'green') }/>
          <Slider color={ 'blue' } actual={ actual } onChange={ v => this.setColor(v, 'blue') }/>
        </div>
      </div>
    );
  }
}
