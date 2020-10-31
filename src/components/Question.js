import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    questionTitle: {
        fontSize: '25px'
    }
}));

export default function Question({ questionList, questionIdx }) {
    const classes = useStyles();
    if (questionList.length > 0) {
        return (
            <div data-testid='question' className={classes.questionTitle}>
                {questionList[questionIdx].question}
            </div>
        )
    } else {
        return 'Loading Questions'
    }

}
