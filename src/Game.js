const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {}

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

class Turn {
  constructor(playerGuess, ) {

  }
  returnGuess() {

  }
}

class Deck {
  constructor () {}
}
module.exports = Game, Turn;