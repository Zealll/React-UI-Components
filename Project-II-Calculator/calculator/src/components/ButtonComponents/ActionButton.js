import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button className={props.actionButton}
        onClick={() => props.onClick(props.text)}>{props.text}</button>
    )
}

export default ActionButton
