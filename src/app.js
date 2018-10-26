import React, { PureComponent } from 'react';
import Square from './square';
import Slider from './slider';
import { randomColor } from './colors';

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
      [color]: parseInt(value, 10)
    });
  }

  renderTitle(matched) {
    return matched ?
      <span className='text-success'>Matched Colors!</span> :
      <span className='text-secondary'>matching colors...</span>;
  }

  render() {
    const { goal, red, green, blue } = this.state;
    const actual = { red, green, blue };

    const matched = goal.red === red &&
      goal.blue === blue &&
      goal.green === green;

    return (
      <div className='container'>
        <h1 className='text-center'>{ this.renderTitle(matched) }</h1>
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
          <Slider color='red' value={ red } actual={ actual } onChange={ v => this.setColor(v, 'red') }/>
          <Slider color='green' value={ green } actual={ actual } onChange={ v => this.setColor(v, 'green') }/>
          <Slider color='blue' value={ blue } actual={ actual } onChange={ v => this.setColor(v, 'blue') }/>
        </div>
      </div>
    );
  }
}
