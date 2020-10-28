import React, { useEffect, useState } from 'react'
import questionData from '../Apprentice_TandemFor400_Data.json';
import Question from './Question';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateQuestions(questionData, numOfQuestions) {
    let unorderedQuestions = []

    while (unorderedQuestions.length < numOfQuestions) {
        const idx = getRandomInt(questionData.length)
        console.log(idx)
        if (unorderedQuestions.indexOf(questionData[idx]) === -1) unorderedQuestions.push(questionData[idx])
    }
    return unorderedQuestions
}

export default function TriviaGame() {
    const [score, setScore] = useState(0)
    const [questionList, setQuestionList] = useState([])
    const [questionIdx, setQuestionIdx] = useState(0)

    useEffect(() => {
        // generate the list of questions if component was just rendered
        if (questionList.length === 0) {
            setQuestionList(generateQuestions(questionData, 10))
        }
        console.log(questionData)
    })

    return (
        <div>
            <Question questionList={questionList} questionIdx={questionIdx} />
        </div>
    )
}
