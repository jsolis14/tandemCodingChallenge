import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

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
    }

}));


function highlightCorrect(choice, questionList, idx) {
    if (questionList[idx].correct === choice) {
        return { backgroundColor: '#4caf50' }
    } else {
        return { backgroundColor: '#f44336' }
    }
}

export default function AnswerRecap({ questionList, idx, ans, questionAnswerChoices }) {
    const classes = useStyles();
    return (
        <div>
            <div>
                {questionList[idx].question}
            </div>
            <List>
                {questionAnswerChoices.map((choice, count) => (
                    <ListItem className={classes.answerChoice} style={highlightCorrect(choice, questionList, idx)} selected={ans === choice} key={choice}>{`${count + 1}) ${choice}`}</ListItem>
                ))}
            </List>
        </div>
    )
}
