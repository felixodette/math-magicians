import React, { Component } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalResult: '0',
      next: null,
      operation: null,
    };
    this.getResult = this.getResult.bind(this);
  }

  getResult = (event) => {
    const result = calculate(this.state, event.target.innerText);
    this.setState(result);
  }

  render() {
    const { totalResult, operation, next } = this.state;
    return (
      <div className="calc-container">
        <div className="calc-result">{`${totalResult || ''} ${operation || ''} ${next || ''}`}</div>
        <Button eventHandler={this.getResult} value="AC" />
        <Button eventHandler={this.getResult} value="+/-" />
        <Button eventHandler={this.getResult} value="%" />
        <Button buttonClass="calc-operators" eventHandler={this.getResult} value="÷" />
        <Button eventHandler={this.getResult} value="7" />
        <Button eventHandler={this.getResult} value="8" />
        <Button eventHandler={this.getResult} value="9" />
        <Button buttonClass="calc-operators" eventHandler={this.getResult} value="x" />
        <Button eventHandler={this.getResult} value="4" />
        <Button eventHandler={this.getResult} value="5" />
        <Button eventHandler={this.getResult} value="6" />
        <Button buttonClass="calc-operators" eventHandler={this.getResult} value="-" />
        <Button eventHandler={this.getResult} value="1" />
        <Button eventHandler={this.getResult} value="2" />
        <Button eventHandler={this.getResult} value="3" />
        <Button buttonClass="calc-operators" eventHandler={this.getResult} value="+" />
        <Button buttonClass="zero" eventHandler={this.getResult} value="0" />
        <Button eventHandler={this.getResult} value="." />
        <Button buttonClass="calc-operators" eventHandler={this.getResult} value="=" />
      </div>
    );
  }
}

export default Calculator;
