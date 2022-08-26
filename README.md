# FlashCards

## Abstract
This project simulates going through flashcards on the Command Line Interface. The user can give their answer to the question and see their final score at the end of the round.

## Illustrations
Running `npm test`

![Running tests on game](https://media.giphy.com/media/XsZqaIwJeAfeOYkSV5/giphy.gif)

Running the application through the Command Line Interface

![Running game through the CLI](https://media.giphy.com/media/OuS9tYPNQmq7kaPzpw/giphy.gif)

## Technologies
  - Javascript
  - Mocha
  - Chai
  - Node

## Install/Set Up
1. Fork this repo  
2. Clone the repo to your local machine `git clone [remote-address] [what you want to name the repo]`
3. Run `npm install` in the terminal
4. Run `node index.js`

## Wins/Challenges
The biggest challenge I experienced in this project was learning how Promises work while adding the Report Card feature. At the end of the round, the report card prints an array of objects that hold the question the user answered incorrectly, the correct answer, the user response, and the number of tries.

Choosing this extension gave me the opportunity to learn more about how to hook to a Promise and pass a callback function to be executed after the Promise has resolved. Seeing this in action game me a better understanding of the uses for asynchronous programming. My mentor explained to me where the instance of a Promise is being made and used to run asychronous code using the async/await approach. Asynchronous programming is a very powerful tool and I consider it a big win to be able to print the report card once the round ends.

## Project Specs
  - The project spec & rubric can be found [here.](https://frontend.turing.edu/projects/flash-cards.html)