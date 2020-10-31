import React from 'react';
import ReactDOM from 'react-dom';
import StartScreen from '../components/StartScreen';
import '@testing-library/jest-dom/extend-expect'

describe('Start Screen Component is responsible for greating the user and starting the game', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<StartScreen />, div);
    });

    // it('when the "get started" button is pressed, it should start the game', async () => {
    //     const { getByTestId } = render(<StartScreen />)

    //     const startButton = getByTestId('start button')

    //     fireEvent.click(startButton)

    //     await waitFor(() => {

    //     })
    // })
})
