import React from 'react';
import './App.css';
// import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import ClearButton from './components/ButtonComponents/ClearButton';
import * as math from 'mathjs'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  addNumber = value => {
    this.setState({
      input: [this.state.input + value]
    })

  }

  clearButton = () => {
    this.setState({
      input: '',
    })
  }

  equalButton = () => {
    this.setState({
      input: math.eval(this.state.input)
    })
  }
  



  



  render(){
    return(
      <div className='App'>
        <CalculatorDisplay display='calculatorDisplay'  input={this.state.input}/>
        <div className='flex'>
          <ClearButton numberButton='clear-zero' text='Clear' onClear={this.clearButton}/>
          <ActionButton actionButton='red' text='/' onClick={this.addNumber}/>
        </div>
        <div className='flex'>
          <NumberButton numberButton='number' text='7' value='7' onClick={this.addNumber}/>
          <NumberButton numberButton='number' text='8' value='8' onClick={this.addNumber}/>
          <NumberButton numberButton='number' text='9' value='9' onClick={this.addNumber}/>
          <ActionButton actionButton='red' text='*' onClick={this.addNumber}/>
        </div>
        <div className='flex'>
          <NumberButton numberButton='number' text='4' value='4' onClick={this.addNumber}/>
          <NumberButton numberButton='number' text='5' value='5' onClick={this.addNumber}/>
          <NumberButton numberButton='number' text='6' value='6' onClick={this.addNumber}/>
          <ActionButton actionButton='red' text='-' onClick={this.addNumber}/>
        </div>
        <div className='flex'>
          <NumberButton numberButton='number' text='1' onClick={this.addNumber}/>
          <NumberButton numberButton='number' text='2' onClick={this.addNumber}/>
          <NumberButton numberButton='number' text='3' onClick={this.addNumber}/>
          <ActionButton actionButton='red' text='+' onClick={this.addNumber}/>
        </div>
        <div className='flex'>
          <NumberButton numberButton='clear-zero' text='0' onClick={this.addNumber}/>
          <ActionButton actionButton='red' text='=' onClick={this.equalButton}/>
        </div>
      </div>
    )
  }
}

export default App;
