# FlashCards

### Abstract:
If you are a Mod 2 student looking for a way to practice your array iterator methods, look no further! FlashCards is an application that runs in your computer's terminal. FlashCards consists of a deck of 30 cards with multiple choice questions. After each response, you get in the moment feedback, and it will receive a percentage correct once you have completed the full round of 30 cards.

### Installation Instructions:
- Clone this repo to your local computer
- Use the `cd` command in the terminal to go into the directory
- Run `npm install` in your terminal
- Run `node index.js` in your terminal to play!

### Preview of App:


### Context:
This was our first solo project in Mod 2 at Turing. The project was completed in two days after seven full weeks as a developer. The spec for this project can be found [here](https://frontend.turing.edu/projects/flash-cards.html).

### Contributors:
Jennifer Yacoubian ([GitHub](https://github.com/jmyacobn), [LinkedIn](https://www.linkedin.com/in/jennifer-yacoubian/))

### Learning Goals:
- Contribute code to an partially constructed object-oriented application
- Implement a robust testing suite using TDD
- Write modular, reusable code that follows SRP (Single Responsibility Principle)
- Follow spec/prompts to make a working application
- Implement ES6 classes

### Technology Used
- Atom
- JavaScript
- Mocha
- Chai
- Github

### Wins:
- Although we wrote code to pass unit tests throughout Mod 1, this was my first time writing my own unit tests using Mocha and Chai frameworks.
- Implementing TDD by writing my tests before writing any code.
- Using hooks to create cleaner, DRYer code.

### Challenges:
- The greatest challenge was creating the Game class where all of the other classes merge to create a functional game. It took me a while to figure out how all of the classes were interacting and how to pull the pieces together.
- Writing unit tests for the first time was extremely challenging, especially adhering to a true TDD model of writing the tests before writing a single line of implementation code

### Future Features:
- Add additional topics and data sets for the user to choose from
- Add functionality so that a score of less than 90% will require the user to go through the entire dataset again
- Add a timer so the user knows how long it took them to go through all of the questions
