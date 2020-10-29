import React from 'react'

export default function StartScreen({ setQuestionIdx }) {

    return (
        <div>
            <div>Welcome to Tandem Trivia</div>
            <button onClick={() => setQuestionIdx(0)}>Get Started</button>
        </div>
    )
}
