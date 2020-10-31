import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, render } from '@testing-library/react';
import TriviaGame from '../components/TriviaGame';
import '@testing-library/jest-dom/extend-expect'
import questionData from '../Apprentice_TandemFor400_Data.json';

describe('Trivia Game component is responsible for the main logic of the game', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TriviaGame />, div);
    });

    describe('when game is first started, it should render the StartScreen', () => {
        it('render the start screen upon mount of trivia game component', async () => {
            const { getByTestId } = render(<TriviaGame />)
            const startButton = getByTestId('start button')
        })

        it('when the get started button is pressed, it should change from the start screen to render a trivia question', async () => {
            const { getByTestId } = render(<TriviaGame />)
            const startButton = getByTestId('start button')

            fireEvent.click(startButton)
            getByTestId('trivia game')

        })

    })

    describe('during the game', () => {
        beforeEach(() => {
            // const { getByTestId } = render(<TriviaGame />)
            // const startButton = getByTestId('start button')

            // fireEvent.click(startButton)
            // getByTestId('trivia game')
        })

        it('should render a question', () => {
            const { getByTestId } = render(<TriviaGame />)
            const startButton = getByTestId('start button')

            fireEvent.click(startButton)
            getByTestId('trivia game')
            expect(getByTestId('question')).toHaveTextContent(/[\s\S]*/)
        })

        it('should render answer choices', () => {
            const { getByTestId } = render(<TriviaGame />)
            const startButton = getByTestId('start button')

            fireEvent.click(startButton)
            getByTestId('trivia game')
            expect(getByTestId('answer choices')).not.toBeEmpty()
        })

        it('should render unique questions', () => {
            const { getByTestId } = render(<TriviaGame />)
            const startButton = getByTestId('start button')

            fireEvent.click(startButton)
            getByTestId('trivia game')

            const questions = []

            for (let i = 0; i <= 9; i++) {
                const answerChoice = getByTestId('answer choice 0')
                fireEvent.click(answerChoice)

                const question = questions.push(getByTestId('question').textContent)
                const idx = questions.indexOf(question)

                expect(idx === -1)

                const submitAnswer = getByTestId('submit answer')
                fireEvent.click(submitAnswer)
                const nextQuestion = getByTestId('next question')
                fireEvent.click(nextQuestion)

            }
        })

        it('user should be able to select a answer and sumbit it', () => {
            const { getByTestId } = render(<TriviaGame />)
            const startButton = getByTestId('start button')

            fireEvent.click(startButton)
            getByTestId('trivia game')

            const question = getByTestId('question').textContent
            const answerChoice = getByTestId('answer choice 0')
            fireEvent.click(answerChoice)
            const submitAnswer = getByTestId('submit answer')
            fireEvent.click(submitAnswer)
            const nextQuestion = getByTestId('next question')
        })

        it('after an answer is submited a new question should be shown', () => {
            const { getByTestId } = render(<TriviaGame />)
            const startButton = getByTestId('start button')

            fireEvent.click(startButton)
            getByTestId('trivia game')

            const question = getByTestId('question').textContent
            const answerChoice = getByTestId('answer choice 0')
            fireEvent.click(answerChoice)
            const submitAnswer = getByTestId('submit answer')
            fireEvent.click(submitAnswer)
            const nextQuestion = getByTestId('next question')
            fireEvent.click(nextQuestion)
            const newQuestion = getByTestId('question').textContent
            expect(question !== newQuestion)
        })

    })

    describe('after 10 questions', () => {
        it('it should display the end screen', () => {
            const { getByTestId } = render(<TriviaGame />)
            const startButton = getByTestId('start button')

            fireEvent.click(startButton)
            getByTestId('trivia game')

            for (let i = 0; i <= 9; i++) {
                const answerChoice = getByTestId('answer choice 0')
                fireEvent.click(answerChoice)


                const submitAnswer = getByTestId('submit answer')
                fireEvent.click(submitAnswer)
                const nextQuestion = getByTestId('next question')
                fireEvent.click(nextQuestion)
            }
            getByTestId('end screen')
        })

        it('should display the 10 question', () => {
            const { getByTestId } = render(<TriviaGame />)
            const startButton = getByTestId('start button')

            fireEvent.click(startButton)
            getByTestId('trivia game')

            for (let i = 0; i <= 9; i++) {
                const answerChoice = getByTestId('answer choice 0')
                fireEvent.click(answerChoice)


                const submitAnswer = getByTestId('submit answer')
                fireEvent.click(submitAnswer)
                const nextQuestion = getByTestId('next question')
                fireEvent.click(nextQuestion)
            }
            expect(getByTestId('question list').children.length === 10)
        })

        it('when the reset game button is pressed it should take you back to the start game', () => {
            const { getByTestId } = render(<TriviaGame />)
            const startButton = getByTestId('start button')

            fireEvent.click(startButton)
            getByTestId('trivia game')

            for (let i = 0; i <= 9; i++) {
                const answerChoice = getByTestId('answer choice 0')
                fireEvent.click(answerChoice)


                const submitAnswer = getByTestId('submit answer')
                fireEvent.click(submitAnswer)
                const nextQuestion = getByTestId('next question')
                fireEvent.click(nextQuestion)
            }
            const resetButton = getByTestId('reset game')
            fireEvent.click(resetButton)
            getByTestId('start button')
        })
    })

    describe('The score should', () => {
        it('increment when a right answer is chosen', () => {
            const { getByTestId } = render(<TriviaGame />)
            const startButton = getByTestId('start button')

            fireEvent.click(startButton)
            getByTestId('trivia game')

            const questionAsked = getByTestId('question').textContent
            let answer;
            questionData.forEach(question => {
                if (question.question === questionAsked) answer = question.correct
            })


            const answerChoices = getByTestId('answer choices')
            let selected

            answerChoices.childNodes.forEach((answerChoice, idx) => {
                if (answerChoice.textContent === `${idx + 1}) ${answer}`) selected = answerChoice
            })

            fireEvent.click(selected)

            const submitAnswer = getByTestId('submit answer')
            fireEvent.click(submitAnswer)

            const score = getByTestId('score')
            expect(score).toHaveTextContent('Score: 10')
        })

        it('stay the same when a wrong answer is chosen', () => {
            const { getByTestId } = render(<TriviaGame />)
            const startButton = getByTestId('start button')

            fireEvent.click(startButton)
            getByTestId('trivia game')

            const questionAsked = getByTestId('question').textContent
            let answer;
            questionData.forEach(question => {
                if (question.question === questionAsked) answer = question.correct
            })


            const answerChoices = getByTestId('answer choices')
            let selected

            answerChoices.childNodes.forEach((answerChoice, idx) => {
                if (answerChoice.textContent !== `${idx + 1}) ${answer}`) selected = answerChoice
            })

            fireEvent.click(selected)

            const submitAnswer = getByTestId('submit answer')
            fireEvent.click(submitAnswer)

            const score = getByTestId('score')
            expect(score).toHaveTextContent('Score: 0')
        })
    })

    describe('question counter', () => {
        it('should increment when the next question is viewed', () => {
            const { getByTestId } = render(<TriviaGame />)
            const startButton = getByTestId('start button')

            fireEvent.click(startButton)
            getByTestId('trivia game')

            for (let i = 0; i <= 9; i++) {
                const questionCounter = getByTestId('question counter')
                expect(questionCounter).toHaveTextContent(`Problem: ${i + 1}/10`)
                const answerChoice = getByTestId('answer choice 0')
                fireEvent.click(answerChoice)


                const submitAnswer = getByTestId('submit answer')
                fireEvent.click(submitAnswer)
                const nextQuestion = getByTestId('next question')
                fireEvent.click(nextQuestion)
            }
            getByTestId('end screen')
        })
    })
})
