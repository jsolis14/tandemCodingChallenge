import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

export default function EndScreen({ score, resetGame, userAnswers }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <div>{`Your score was: ${score}`}</div>
            </div>
            <div>

            </div>
            <div>
                <Button className={classes.button} onClick={resetGame}>Reset Game</Button>
            </div>
        </div>
    )
}
