import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Question from '../components/Question';
import '@testing-library/jest-dom/extend-expect'

const questionList = [{
    "question": "What was Tandem previous name?",
    "incorrect": [
        "Tandem",
        "Burger Shack",
        "Extraordinary Humans"
    ],
    "correct": "Devmynd"
},]

describe('Question Component is responsible for displaying a question', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Question questionList={questionList} questionIdx={0} />, div);
    });

    it('displays a question', () => {
        const { getByTestId } = render(<Question questionList={questionList} questionIdx={0} />)
        expect(getByTestId('question')).toHaveTextContent('What was Tandem previous name?')
    })
})
