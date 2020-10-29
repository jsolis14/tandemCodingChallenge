import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    answerChoice: {
        border: '2px solid',
        margin: '5px',
        backgroundColor: '#485381'
    }
}));

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


export default function AnswerChoices({ questionList, questionIdx, setUserAnswer, userAnswer, submitPressed, setAnswerList, answerList }) {
    const classes = useStyles()
    const [selectedIdx, setSelectedIdx] = useState(null)
    const [answers, setAnswers] = useState([])

    const answerIsCorrectStyling = (idx) => {
        if (questionList[questionIdx].correct === answers[idx] && submitPressed) {
            return { backgroundColor: '#4caf50' }
        } else if (submitPressed) {

            return { backgroundColor: '#f44336' }
        }
    }

    function handleAnswerClick(event, idx) {
        setSelectedIdx(idx)
        setUserAnswer(answers[idx])

    }

    useEffect(() => {
        if (questionList.length) {
            const answerChoices = getAnswerChoices(questionList, questionIdx)
            setAnswers(answerChoices)
            setUserAnswer(null)
            setAnswerList([...answerList, answerChoices])
        }
    }, [questionList, questionIdx])

    return (
        <List>
            {answers.map((ele, idx) => (
                <ListItem button className={classes.answerChoice} style={answerIsCorrectStyling(idx)} onClick={(event) => handleAnswerClick(event, idx)} selected={(selectedIdx === idx && userAnswer !== null) || submitPressed} value={idx} key={idx}>{`${idx + 1}) ${ele}`}</ListItem>
            ))
            }
        </List >
    )


}
