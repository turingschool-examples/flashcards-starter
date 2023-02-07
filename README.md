# Rock, Paper, Scissors
[Project Planning Board](https://trello.com/b/Qg9XFbRk/mod-2-flashcards-project)

### Abstract:

The goal of this project was to create a game playable in the CLI. Using provided files we were expected to use TDD to create necessary classes and import data from outside files to create a playable flashcard quiz.

### Technologies Used:
- JavaScript
- Node
- Mocha
- Chai

### Installation Instructions:

To clone a copy of the project to a remote repository, follow these steps:

1. Go to the project [page on GitHub](https://github.com/kirkhauck/flashcards).
1. Fork the repository.
1. Click the "<> Code" button and copy your preferred clone link.
1. Open your Terminal.
1. Navigate to the directory you would like to clone the repository to.
1. Enter the command `git clone cloneLink` replacing `cloneLink` with the link you copied in Step 3
1. Use command `code .` to open the project in your preferred text editor.
1. To play the game, make sure you are in the `flashcards` directory, then run `node index.js` in your terminal. **NOTE**: This method works assuming you have `Node.js` installed.

### Preview of App:

![App Preview](https://media3.giphy.com/media/CXa6nb6Cdd0jC61JKp/giphy.gif?cid=790b76111a6500f39d3760a8ff32cf87d3bc03a5c0a2345a&rid=giphy.gif&ct=g)

### Context:

Completed as part of the Turing School of Software Development 2211 FE Mod 2 curriculum
Approximate hours to completion: 12

### Contributors:

[Kirk Hauck](https://github.com/kirkhauck)

### Learning Goals:

- Contribute code to an partially constructed object-oriented application
- Follow spec/prompts to make a working application
- Implement ES6 classes
- Write modular, reusable code that follows SRP (Single Responsibility Principle)
- Implement a robust testing suite using TDD

### Wins + Challenges:

**Challenge:**
Using a variable from a different `.js` file

**Win**
In this project, we were provided with a `data.js` file containing an array of card objects. To play the game, we were expected to utilize this file to instantiate new cards using our `Card.js`. In the final iteration, I realized I had been writing my own card objects in the test files, but had not utilized `data.js`. After researching and reaching out to fellow students, I found the correct method to access the array in `data.js`. To link my `Game.js` file to `data.js`, I needed to export the desired variable, `prototypeData`, by using `module.exports = { prototypeData }`. Then I needed to import it in my `Game.js` file by assigning it to a variable using `const prototypeQuestions = data.prototypeData`. This allowed me to use `prototypeData` in my `Game.js` file.