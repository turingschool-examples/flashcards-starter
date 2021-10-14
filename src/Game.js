const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.currentRound;
  }

  start() {
    const cards = prototypeQuestions.map(dataPiece => new Card(dataPiece));
    const deck = new Deck(cards);
    const round = new Round(deck);

    this.currentRound = round;
    this.printMessage(deck);
    this.printQuestion(round);
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

}

module.exports = Game;
