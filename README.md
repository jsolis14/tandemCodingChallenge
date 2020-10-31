# Tandem Coding Challenge

## System Dependencies
* Node.js

## How to run the application
1. Install node.js. More info [here](https://nodejs.org/en/download/)
2. Clone the github repo and cd into the folder
3. Once in the directory run the command `npm install`. This will install all dependencies asssociated with the project
4. Run the command `npm start`
5. Additionally to run tests you can run the command `npm test`

## MVP's
* A round of trivia has 10 Questions
* All questions are multiple-choice questions
* Your score does not need to update in real time
* Results can update on form submit, button click, or any interaction you choose
* A user can view questions. (assumed that a user can only view questions after they have finished the test)
* Questions with their multiple choice options must be displayed one at a time.
* Questions should not repeat in a round.
* A user can select only 1 answer out of the 4 possible answers.
* The correct answer must be revealed after a user has submitted their answer
* A user can see the score they received at the end of the round

## Extra Features I would have liked to implement
* The option to set a time limit for each question (timer)
* The option to choose from another test bank (api call)
* Persist game state upon refresh through local storage
