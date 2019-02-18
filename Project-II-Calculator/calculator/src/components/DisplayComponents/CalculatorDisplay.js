import React from 'react';
import './Display.css';


const CalculatorDisplay = props => {
    return(
        <div 
            className='calculatorDisplay' 
        >
            {props.input}
        </div>
    )
}


export default CalculatorDisplay