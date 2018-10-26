import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { colorShape } from './colors';
import Square from './square';
import Slider from './slider';
import { setColor, resetColors } from './redux/actions';

export class App extends PureComponent {
  renderTitle(matched) {
    return matched ?
      <span className='text-success'>Matched Colors!</span> :
      <span className='text-secondary'>matching colors...</span>;
  }

  render() {
    const { goal, red, green, blue, onSetColor, onResetColors } = this.props;
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
          <Slider color='red' value={ red } actual={ actual } onChange={ v => onSetColor(v, 'red') }/>
          <Slider color='green' value={ green } actual={ actual } onChange={ v => onSetColor(v, 'green') }/>
          <Slider color='blue' value={ blue } actual={ actual } onChange={ v => onSetColor(v, 'blue') }/>
        </div>

        <br />
        <div>
          <button className='btn btn-primary btn-lg' onClick={ onResetColors }>Scramble Colors</button>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  goal: colorShape,
  red: PropTypes.number,
  green: PropTypes.number,
  blue: PropTypes.number,

  onSetColor: PropTypes.func,
  onResetColors: PropTypes.func
};

export default connect(
  function mapStateToProps(state) {
    return {
      red: state.red,
      green: state.green,
      blue: state.blue,

      goal: state.goal
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      onSetColor: (value, color) => dispatch(setColor(value, color)),
      onResetColors: () => dispatch(resetColors())
    };
  }
)(App);
