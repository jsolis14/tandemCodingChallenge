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


function handleNextQuestion(questionList, questionIdx, answer, score, setQuestionIdx, setScore) {
    if (answerIsCorrect(questionList, questionIdx, answer)) {
        setScore(score + 10)
    }

    setQuestionIdx(questionIdx + 1)
}

export default function TriviaGame() {
    const [score, setScore] = useState(0)
    const [questionList, setQuestionList] = useState([])
    const [questionIdx, setQuestionIdx] = useState(0)
    const [userAnswer, setUserAnswer] = useState(null)
    // const [selectedIdx, setSelectedIdx] = useState(null)
    // const [answers, setAnswers] = useState([])


    useEffect(() => {
        // generate the list of questions if component was just rendered
        if (questionList.length === 0) {
            setQuestionList(generateQuestions(questionData, 10))
        } else {
            // setAnswers(getAnswerChoices(questionList, questionIdx))
        }
    }, [questionIdx, questionList])

    return (
        <div>
            <div>Score: {score}</div>
            <Question questionList={questionList} questionIdx={questionIdx} />
            <AnswerChoices questionList={questionList} questionIdx={questionIdx} setUserAnswer={setUserAnswer} userAnswer={userAnswer} />
            <div>
                {userAnswer ? <button onClick={() => handleNextQuestion(questionList, questionIdx, userAnswer, score, setQuestionIdx, setScore)}>Go To Next</button> : <></>}
            </div>
        </div>
    )
}
