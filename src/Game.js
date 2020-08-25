const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require("./Deck");
const Card = require('./Card');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound = null;
  }
  start() {
    const cards = prototypeQuestions.map(card => new Card (card.id, card.question, card.answers, card.correctAnswer));
    const deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
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