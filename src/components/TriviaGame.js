import React, { useEffect, useState } from 'react'
import questionData from '../Apprentice_TandemFor400_Data.json';
import AnswerChoices from './AnswerChoices';
import EndScreen from './EndScreen';
import Question from './Question';
import StartScreen from './StartScreen';

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
    const [questionIdx, setQuestionIdx] = useState(null)
    const [userAnswer, setUserAnswer] = useState(null)

    const [submitPressed, setSubmitPressed] = useState(false)
    const [responseMessage, setResponseMessage] = useState('')

    function resetGame() {
        setScore(0)
        setQuestionList([])
        setQuestionIdx(null)
        setUserAnswer(null)
        setSubmitPressed(false)
        setResponseMessage('')
    }

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

    if (questionIdx === null) {
        return <StartScreen setQuestionIdx={setQuestionIdx} />
    } else if (questionIdx <= 9) {
        return (
            <div>
                <div>
                    <div>Score: {score}</div>
                    <div>Problem: {questionIdx + 1}/10 </div>
                </div>

                <Question questionList={questionList} questionIdx={questionIdx} />
                <div>{responseMessage}</div>
                <AnswerChoices questionList={questionList} questionIdx={questionIdx} setUserAnswer={setUserAnswer} userAnswer={userAnswer} submitPressed={submitPressed} />
                <div>
                    {userAnswer && !submitPressed ? <button onClick={handleSubmit}>Submit Answer</button> : <></>}
                    {userAnswer && submitPressed ? <button onClick={handleNextQuestion}>Next Question</button> : <></>}
                </div>
            </div>
        )
    } else {
        return <EndScreen score={score} resetGame={resetGame} />
    }



}
