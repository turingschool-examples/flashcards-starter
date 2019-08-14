const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.roundCount = 0;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  // calculateRound() {
  //   console.log(round.turn)
  //   round.turn === round.deck.cards.length ? this.roundCount++ : null;
  // }

  start() {
    let deck = new Deck(prototypeQuestions);
    let round = new Round(deck);

    this.roundCount++;

    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;