import React from 'react'

const ClearButton = props => {
    return(
        <button 
        className={props.numberButton}
        onClick={props.onClear}
        >
        {props.text}
        </button>
    )
}

export default ClearButton