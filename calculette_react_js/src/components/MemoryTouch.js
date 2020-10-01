import React from 'react'

export default function MemoryTouch({value,functionnalite}) {
    return (
        <div className="touch memoricTouch" onClick={functionnalite}>
            {value}
        </div>
    )
}
