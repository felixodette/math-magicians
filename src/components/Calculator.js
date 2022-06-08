import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-container">
        <div className="calc-result">0</div>
        <button type="button" className="top-operators">AC</button>
        <button type="button" className="top-operators">+/-</button>
        <button type="button" className="top-operators">%</button>
        <button type="button" className="operators">÷</button>
        <button type="button" className="numbers">7</button>
        <button type="button" className="numbers">8</button>
        <button type="button" className="numbers">9</button>
        <button type="button" className="operators">x</button>
        <button type="button" className="numbers">4</button>
        <button type="button" className="numbers">5</button>
        <button type="button" className="numbers">6</button>
        <button type="button" className="operators">-</button>
        <button type="button" className="numbers">1</button>
        <button type="button" className="numbers">2</button>
        <button type="button" className="numbers">3</button>
        <button type="button" className="operators">+</button>
        <button type="button" className="numbers zero">0</button>
        <button type="button" className="decimal">.</button>
        <button type="button" className="operators">=</button>
      </div>
    );
  }
}

export default Calculator;
