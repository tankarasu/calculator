import React from 'react'

export default function EqualTouch({value,functionnalite}) {
    return (
        <div className="equalTouch" onClick={functionnalite}>
            {value}
        </div>
    )
}
