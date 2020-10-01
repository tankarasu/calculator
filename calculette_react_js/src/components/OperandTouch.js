import React from 'react'

export default function OperandTouch({value,functionnalite}) {
    return (
      <div className="touch operandTouch" onClick={functionnalite}>
        {value}
      </div>
    );
}
