import React, { useState, useEffect } from 'react';

function shuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const randIdx = Math.floor(Math.random() * i)

        const temp = array[i]
        array[i] = array[randIdx]
        array[randIdx] = temp
    }
}

function getAnswerChoices(questionList, questionIdx) {
    const question = questionList[questionIdx]
    let answerList = question.incorrect.map(ele => ele)
    answerList.push(question.correct)
    shuffle(answerList)
    return answerList
}

export default function AnswerChoices({ questionList, questionIdx }) {

    useEffect(() => {

    })

    if (questionList.length > 0) {
        return (
            <div>
                {getAnswerChoices(questionList, questionIdx).map(ele => (<div key={ele}>{ele}</div>))}
            </div>
        )
    } else {
        return 'loading answers'
    }

}
