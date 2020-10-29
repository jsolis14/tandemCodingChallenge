import React from 'react'

export default function EndScreen({ score, resetGame }) {

    return (
        <div>
            <div>{`your score was ${score}`}</div>
            <button onClick={resetGame}>Reset Game</button>
        </div>
    )
}
