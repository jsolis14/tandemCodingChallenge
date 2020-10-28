import React, { useState, useEffect } from 'react';

function randomizeAnswerChoices(questionList, questionIdx) {
    const question = questionList[questionIdx]
    let answerList = question.incorrect.map(ele => ele)
    answerList.push(question.correct)

    return answerList
}

export default function AnswerChoices({ questionList, questionIdx }) {

    useEffect(() => {

    })

    if (questionList.length > 0) {
        return (
            <div>
                {randomizeAnswerChoices(questionList, questionIdx).map(ele => (<div key={ele}>{ele}</div>))}
            </div>
        )
    } else {
        return 'loading answers'
    }

}
