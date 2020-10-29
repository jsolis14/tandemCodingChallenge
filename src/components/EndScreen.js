import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AnswerRecap from './AnswerRecap'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
const useStyles = makeStyles((theme) => ({
    root: {
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
        fontFamily: 'Roboto Mono',
        fontSize: '3rem',
        [theme.breakpoints.up('xl')]: {
            width: '1100px',
        }
    },
    button: {
        backgroundColor: '#009be5',
        color: '#000000',
        fontFamily: 'Roboto Mono',
        margin: '5px',
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
    },
    title: {
        margin: '5px',
        padding: '5px'
    },
    answerChoice: {
        border: '2px solid',
        margin: '5px',
        backgroundColor: '#485381'
    }

}));

function highlightCorrect(choice, questionList, idx) {
    if (questionList[idx].correct === choice) {
        return { backgroundColor: '#4caf50' }
    }
}
export default function EndScreen({ score, resetGame, userAnswers, questionList, answerList }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <div>{`Your score was: ${score}`}</div>
            </div>
            <div>
                {userAnswers.map((userAns, i) => {
                    return (
                        <div>
                            <div key={questionList[i].question}>{questionList[i].question}</div>
                            <div>
                                {answerList[i].map((choice, idx) => {
                                    return <ListItem className={classes.answerChoice} style={highlightCorrect(choice, questionList, i)} selected={userAns === choice} key={choice}>{`${idx + 1}) ${choice}`}</ListItem>
                                })}
                            </div>
                        </div>

                    )
                })}
            </div>
            <div>
                <Button className={classes.button} onClick={resetGame}>Reset Game</Button>
            </div>
        </div>
    )
}
