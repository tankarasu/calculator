import React from 'react'

export default function Touche({value,cName,functionnalite}) {
    return (
        <div className={cName} onClick={functionnalite}>
            {value}
        </div>
    )
}
