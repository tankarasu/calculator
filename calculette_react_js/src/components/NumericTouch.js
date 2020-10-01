import React from 'react'

export default function NumericTouch({value,functionnalite}) {
    return (
        <div className="touch numericTouch" onClick={functionnalite}>
            {value}
        </div>
    )
}
