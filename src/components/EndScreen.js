import React from 'react'

export default function EndScreen({ score }) {

    return (
        <div>
            <div>{`your score was ${score}`}</div>
            <button >Reset Game</button>
        </div>
    )
}
