import React, { useEffect, useState } from 'react'
import questionData from '../Apprentice_TandemFor400_Data.json';
import AnswerChoices from './AnswerChoices';
import Question from './Question';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateQuestions(questionData, numOfQuestions) {
    let unorderedQuestions = []

    while (unorderedQuestions.length < numOfQuestions) {
        const idx = getRandomInt(questionData.length)
        if (unorderedQuestions.indexOf(questionData[idx]) === -1) unorderedQuestions.push(questionData[idx])
    }
    return unorderedQuestions
}

const answerIsCorrect = (questionList, questionIdx, answer) => questionList[questionIdx].correct === answer





export default function TriviaGame() {
    const [score, setScore] = useState(0)
    const [questionList, setQuestionList] = useState([])
    const [questionIdx, setQuestionIdx] = useState(0)
    const [userAnswer, setUserAnswer] = useState(null)

    const [submitPressed, setSubmitPressed] = useState(false)
    const [responseMessage, setResponseMessage] = useState('')

    function handleNextQuestion() {
        setQuestionIdx(questionIdx + 1)
        setSubmitPressed(false)
        setUserAnswer(null)
        setResponseMessage('')
    }

    function handleSubmit() {
        if (answerIsCorrect(questionList, questionIdx, userAnswer)) {
            setScore(score + 10)
            setResponseMessage('Good job! You got this one right')
        } else {
            setResponseMessage(`Better luck next time. The correct answer was ${questionList[questionIdx].correct}`)
        }
        setSubmitPressed(true)
    }

    useEffect(() => {
        // generate the list of questions if component was just rendered
        if (questionList.length === 0) {
            setQuestionList(generateQuestions(questionData, 10))
        } else {
        }
    }, [questionList])

    return (
        <div>
            <div>Score: {score}</div>
            <Question questionList={questionList} questionIdx={questionIdx} />
            <div>{responseMessage}</div>
            <AnswerChoices questionList={questionList} questionIdx={questionIdx} setUserAnswer={setUserAnswer} userAnswer={userAnswer} />
            <div>
                {userAnswer && !submitPressed ? <button onClick={handleSubmit}>Submit Answer</button> : <></>}
                {userAnswer && submitPressed ? <button onClick={handleNextQuestion}>Next Question</button> : <></>}
            </div>
        </div>
    )
}
