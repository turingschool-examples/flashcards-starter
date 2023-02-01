const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = {};
    this.currentDeck = [];
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
      util.main(round);
  }

  start(questionsArray) {
    let cards = questionsArray.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer));
    this.currentDeck = new Deck(cards);
    this.currentRound = new Round(this.currentDeck);
    this.printMessage(this.currentDeck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
}

module.exports = Game;