# FlashCards Project

## Abstract:

Using TDD, we are creating an application that simulates flashcards on the command line through a series of iterations building on ES6 classes and practicing SRP.

## Contributors:

Connie Hong

## Project Links:

FlashCard Project Repo: https://github.com/conconartist/flashcards-project

Planning Project: https://github.com/conconartist/flashcards-project

## Setup

Clone down the repo from the GitHub project link above to your local machine.

Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```

**For Unit Tests**

Run `npm test` in your terminal to view that tests have passed for each file in the source directory. (It will automatically invoke the method to start a new game, so press `Control + c` to exit the flashcards game.)

Open files in the source `src` directory to see the built out classes: Card.js, Deck.js, Turn.js, Round.js, and Game.js
Open files in the test directory to see each file's corresponding tests: Card-test.js, Deck-test.js, Turn-test.js, Round-test.js, Game-test.js

**For FlashCard Game Play**

Run `node index.js` from the root directory of the project to run the flashcards game. Type any number between 1-3 to answer the question and press `ENTER` to see feedback for your answer. The game will continue to ask questions until the round is complete.

## Technologies Used:

* JavaScript ES6
* Node.js
* ESLint


![flash cards example gif](https://media.giphy.com/media/1zkb1q58eTiTH6D7wc/giphy.gif)

---
