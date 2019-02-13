import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button className={props.actionButton}>{props.text}</button>
    )
}

export default ActionButton
