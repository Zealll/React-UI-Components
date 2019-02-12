import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="appContainer">
      <CalculatorDisplay display="calculatorDisplay" text="0"/>
      <div className="flex">
        <ActionButton actionButton="clear-zero" text="Clear"/>
        <NumberButton numberButton="red" text="÷"/>
      </div>
      <div className="flex">
        <NumberButton numberButton="number" text="7"/>
        <NumberButton numberButton="number" text="8"/>
        <NumberButton numberButton="number" text="9"/>
        <NumberButton numberButton="red" text="X"/>
      </div>
      <div className="flex">
        <NumberButton numberButton="number" text="4"/>
        <NumberButton numberButton="number" text="5"/>
        <NumberButton numberButton="number" text="6"/>
        <NumberButton numberButton="red" text="-"/>
      </div>
      <div className="flex">
        <NumberButton numberButton="number" text="1"/>
        <NumberButton numberButton="number" text="2"/>
        <NumberButton numberButton="number" text="3"/>
        <NumberButton numberButton="red" text="+"/>
      </div>
      <div className="flex">
        <ActionButton actionButton="clear-zero" text="0"/>
        <NumberButton numberButton="red" text="="/>
      </div>
    </div>
  );
};

export default App;
