const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor(round) {
    this.currentRound = round;
    // this.newCards = newCards;
  };

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  };

  printQuestion(round) {
      util.main(round);
  };

  start() {
    // console.log(prototypeQuestions)
    console.log(this.currentRound.cards)


    return this.currentRound
  };

};

module.exports = Game;
