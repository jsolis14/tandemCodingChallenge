import React, { useEffect, useState } from 'react'
import questionData from '../Apprentice_TandemFor400_Data.json';
import AnswerChoices from './AnswerChoices';
import EndScreen from './EndScreen';
import Question from './Question';
import StartScreen from './StartScreen';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5px',
        margin: 'auto',
        fontFamily: 'Roboto Mono',
        [theme.breakpoints.up('xl')]: {
            width: '1100px',
        }
    },
    button: {
        backgroundColor: '#009be5',
        color: '#000000',
        '&:hover': {
            backgroundColor: '#006db3',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#006db3',
            borderColor: '#005cbf',
        },
        '&:focus': {
            // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        }
    },
    scoreBoard: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '5px',
        padding: '5px'
    },
    response: {
        margin: '5px',
        padding: '5px'
    },
    question: {
        margin: '5px',
        padding: '5px'
    },
    gameContainer: {
        display: 'flex',
        flexDirection: 'column'
    }
}));

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
    const classes = useStyles();
    const [score, setScore] = useState(0)
    const [questionList, setQuestionList] = useState([])
    const [answerList, setAnswerList] = useState([])
    const [questionIdx, setQuestionIdx] = useState(null)
    const [userAnswer, setUserAnswer] = useState(null)
    const [userAnswers, setUserAnswers] = useState([])
    const [submitPressed, setSubmitPressed] = useState(false)
    const [responseMessage, setResponseMessage] = useState('')

    function resetGame() {
        setScore(0)
        setQuestionList([])
        setQuestionIdx(null)
        setUserAnswer(null)
        setSubmitPressed(false)
        setResponseMessage('')
        setUserAnswers([])
        setAnswerList([])
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
        setUserAnswers([...userAnswers, userAnswer])
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
            <div className={classes.root} data-testid='trivia game'>
                <div className={classes.gameContainer}>
                    <div className={classes.scoreBoard}>
                        <div data-testid='score'>Score: {score}</div>
                        <div data-testid='question counter'>Problem: {questionIdx + 1}/10 </div>
                    </div>
                    <div className={classes.question}>
                        <Question questionList={questionList} questionIdx={questionIdx} />
                    </div>
                    <div className={classes.response}>
                        <div>{responseMessage}</div>
                    </div>
                    <AnswerChoices questionList={questionList} questionIdx={questionIdx} setUserAnswer={setUserAnswer} userAnswer={userAnswer} submitPressed={submitPressed} setAnswerList={setAnswerList} answerList={answerList} />
                    <div>
                        {userAnswer && !submitPressed ? <Button className={classes.button} data-testid='submit answer' onClick={handleSubmit}>Submit Answer</Button> : <></>}
                        {userAnswer && submitPressed ? <Button className={classes.button} data-testid='next question' onClick={handleNextQuestion}>Next Question</Button> : <></>}
                    </div>
                </div>

            </div>
        )
    } else {
        return <EndScreen score={score} resetGame={resetGame} userAnswers={userAnswers} questionList={questionList} answerList={answerList} />
    }



}
