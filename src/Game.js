const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {}

  printMessage(deck, round) {
    // eslint-disable-next-line no-console
    console.log(`Welcome to FlashCards! You are playing with 
    ${deck.countCards()} cards. \n
    -----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
