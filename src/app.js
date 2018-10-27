import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { colorShape, matched } from './utils';
import Square from './square';
import Slider from './slider';
import Distance from './distance';
import { setColor, resetColors, cheat, hint } from './redux/actions';

export class App extends PureComponent {
  componentDidMount() {
    setTimeout(() => {
      const won = matched(this.props.goal, this.props);

      if(!won) {
        this.props.onHint();
      }

    }, this.props.timeout);
  }

  renderTitle(won) {
    return won ?
      <span className='text-success'>Matched Colors!</span> :
      <span className='text-secondary'>matching colors...</span>;
  }

  render() {
    const {
      goal, red, green, blue, cheated, cheating,
      onSetColor, onResetColors, onCheat
    } = this.props;

    const actual = { red, green, blue };
    const won = matched(goal, actual);

    return (
      <div className='container'>
        <h1 className='text-center'>{ this.renderTitle(won) }</h1>
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
        <div className='row'>
          <div className='col-2'>
            <button className='btn btn-primary btn-lg' onClick={ onResetColors }>Scramble Colors</button>
            { cheating && (
              <button className='btn btn-danger btn-lg' onClick={ onCheat }>
                { cheated ? 'You Cheater!' : 'Need Some Help?' }
              </button>
            )}
          </div>
          <div className='col-2 offset-8'>
            <Distance actual={ actual } goal={ goal }/>
          </div>
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
  timeout: PropTypes.number,
  cheated: PropTypes.bool,
  cheating: PropTypes.bool,

  onSetColor: PropTypes.func,
  onResetColors: PropTypes.func,
  onCheat: PropTypes.func,
  onHint: PropTypes.func
};

App.defaultProps = {
  timeout: 1000 * 15
};

export default connect(
  function mapStateToProps(state) {
    return {
      red: state.red,
      green: state.green,
      blue: state.blue,

      goal: state.goal,
      cheated: state.cheated,
      cheating: state.cheating
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      onSetColor: (value, color) => dispatch(setColor(value, color)),
      onResetColors: () => dispatch(resetColors()),
      onCheat: () => dispatch(cheat()),
      onHint: () => dispatch(hint())
    };
  }
)(App);
