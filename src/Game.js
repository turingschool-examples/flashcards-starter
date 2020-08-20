const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const prototypeQuestions = data.prototypeData;
const Round = require('./Round')
const util = require('./util');

class Game {
  constructor() {}

  start() {
    let cards = prototypeQuestions.map(card => new Card(...Object.values(card)));
    let deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage();
    this.printQuestion();
  }

  printMessage() {
    console.log(`Welcome to FlashCards! You are playing with ${this.currentRound.deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion() {
      util.main(this.currentRound);
  }
}
module.exports = Game;
