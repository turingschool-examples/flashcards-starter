const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
// const Card = require('./Card');
// const Round = require('./Round');
// const Turn = require('./Turn');
// const Deck = require('./Deck');


class Game {
  constructor() {
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
