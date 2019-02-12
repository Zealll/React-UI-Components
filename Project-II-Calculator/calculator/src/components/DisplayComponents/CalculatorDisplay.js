import React from 'react';
import './Display.css';


const CalculatorDisplay = props => {
    return(
        <div className={props.display}>{props.text}</div>
    )
}


export default CalculatorDisplay