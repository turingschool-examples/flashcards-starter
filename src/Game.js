const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.deck;
    this.currentRound;
    this.deck;

  };

  start(deck, round) {
      this.createDeck(deck);
      this.newRound(this.deck.cards);
      this.printMessage(deck, round);
      this.printQuestion(round);

  };

  newRound(cards) {
    this.currentRound = new Round(cards);

  };

  createDeck(cards) {
    this.deck = new Deck(cards);
  
  };

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${this.deck.countCards()} cards.
-----------------------------------------------------------------------`)
  };

  printQuestion(round) {
      util.main(round);
  };

};

module.exports = Game;