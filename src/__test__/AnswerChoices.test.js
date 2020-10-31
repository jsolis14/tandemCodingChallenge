import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, render, waitForDomChange } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import AnswerChoices from '../components/AnswerChoices';


const questionList = [{
    "question": "What was Tandem previous name?",
    "incorrect": [
        "Tandem",
        "Burger Shack",
        "Extraordinary Humans"
    ],
    "correct": "Devmynd"
},]

describe('The AnswerChoices component is responsible for displaying answer choices to a question', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AnswerChoices questionList={questionList} questionIdx={0} />, div);
    });
})
