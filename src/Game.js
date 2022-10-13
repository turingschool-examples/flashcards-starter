const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
// const round = require('./Round');

class Game {
  constructor() {
    this.round = 0;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  currentRound() {
    return this.round++;
  }
}

module.exports = Game;
// DON'T TEST GAME.START!!!!

// Your Game class should meet these other requirements:

  // currentRound()
    // Should keep track of the currentRound
    // 

  //start()
  // start: method that starts everything
  // Creates Cards
  // Puts Cards in a Deck
  // Creates a new Round using the Deck
  // invokes printMessage to display the message in the CLI
  // invokes printQuestion to kick off our helper functions that allow interaction via the CLI
  // Your game.start() method should be invoked to make the game playable in the console.
  // Look at the file being run when we want to start the game (node index.js). Think about where you need to invoke your Game.start method.
  // For example : game.currentRound; // => Round {...} (The new Round object that has been instantiated)