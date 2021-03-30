/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Display } from './components';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};


export default class App extends Component {
  state = {
    ...initialState,
  };


  addDigit = value => {
    const { displayValue, clearDisplay, values, current } = this.state;

    const toClearDisplay = displayValue === '0' || clearDisplay;

    const hasPoint = displayValue.includes('.');
    if (value === '.' && hasPoint && !toClearDisplay) {
      return;
    }



    const currentValue = toClearDisplay ? '' : displayValue;

    const valueToDisplay = currentValue + value;


    this.setState({
      displayValue: valueToDisplay,
      clearDisplay: false,
    });

    if (value !== '.') {
      const newValue = parseFloat(valueToDisplay);
      values[current] = newValue;

      this.setState({ values });
    }


  }

  clearMemory = () => {
    this.setState({ ...initialState });
  }

  setOperarion = op => {
    const { current, values, operation } = this.state;

    if (current === 0) {
      this.setState({ operation: op, current: 1, clearDisplay: true });
    } else {
      const equals = op === '=';


      try {
        values[0] = eval(`${values[0]} ${operation} ${values[1]}`);
        console.log(values[0]);
      } catch (e) {
        values[0] = values[0];

      }

      values[1] = 0;
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : op,
        current: equals ? 0 : 1,
        clearDisplay: true,
        values,
      });





    }



  }

  render () {
    const { displayValue } = this.state;
    return (
      <View style={styles.container}>
        <Display value={displayValue} />
        <View style={styles.buttons}>
          <Button onClick={this.clearMemory} triple label="AC" />
          <Button onClick={this.setOperarion} operation label="/" />

          <Button onClick={this.addDigit} label="7" />
          <Button onClick={this.addDigit} label="8" />
          <Button onClick={this.addDigit} label="9" />

          <Button onClick={this.setOperarion} operation label="*" />

          <Button onClick={this.addDigit} label="4" />
          <Button onClick={this.addDigit} label="5" />
          <Button onClick={this.addDigit} label="6" />

          <Button onClick={this.setOperarion} operation label="-" />

          <Button onClick={this.addDigit} label="1" />
          <Button onClick={this.addDigit} label="2" />
          <Button onClick={this.addDigit} label="3" />

          <Button onClick={this.setOperarion} operation label="+" />
          <Button onClick={this.addDigit} double label="0" />
          <Button onClick={this.addDigit} label="." />
          <Button onClick={this.setOperarion} operation label="=" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
