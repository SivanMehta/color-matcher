import React, { PureComponent } from 'react';
import Square from './square';
import Slider from './slider';

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

export default class App extends PureComponent {
  constructor() {
    super(...arguments);

    const start = randomColor();
    const goal = randomColor();

    this.state = {
      ...start,
      goal
    };

    this.reset = this.reset.bind(this);
    this.setColor = this.setColor.bind(this);
  }

  reset() {
    const start = randomColor();
    const goal = randomColor();

    this.setState({
      ...start,
      goal
    });
  }

  setColor(value, color) {
    this.setState({
      [color]: parseInt(value)
    });
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
        <div>
          <Slider value={ red } onChange={ v => this.setColor(v, 'red') }/>
          <Slider value={ green } onChange={ v => this.setColor(v, 'green') }/>
          <Slider value={ blue } onChange={ v => this.setColor(v, 'blue') }/>
        </div>
        <div className='row'>
          <button className="btn btn-primary" onClick={ this.reset }>Reset</button>
        </div>
      </div>
    );
  }
}
