import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, render, waitForDomChange } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import EndScreen from '../components/EndScreen';

const questionList = [{
    "question": "What was Tandem previous name?",
    "incorrect": [
        "Tandem",
        "Burger Shack",
        "Extraordinary Humans"
    ],
    "correct": "Devmynd"
},]

const userAnswers = ['Tandem']
const answerList = [["Tandem", "Burger Shack", "Extraordinary Humans", "Devmynd"]]
describe('The EndScreen component is responsible for displaying the list of questions the user was asked after the game is finished', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<EndScreen questionList={questionList} userAnswers={userAnswers} answerList={answerList} score={10} />, div);
    });

    it('should display questions the user was asked', () => {
        const { getByTestId } = render(<EndScreen questionList={questionList} userAnswers={userAnswers} answerList={answerList} score={10} />)
        const questionNodes = getByTestId('question list')

        expect(questionNodes.childNodes.length === questionList.length)
    })

    it('should display the final score', () => {
        const { getByTestId } = render(<EndScreen questionList={questionList} userAnswers={userAnswers} answerList={answerList} score={10} />)
        const finalScore = getByTestId('final score')
        expect(finalScore).toHaveTextContent(`Your score was: 10`)

    })
})
