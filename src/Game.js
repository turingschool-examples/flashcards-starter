const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {

  printMessage(deck, round) {
    return `Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`
  }

  async printQuestion(round, restartGame) {
      await util.main(round, restartGame);
  }
}

module.exports = Game;
