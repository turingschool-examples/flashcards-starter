const Card = require('./Card');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const Deck = require('./Deck');
const Round = require('./Round');
const util = require('./util');

class Game {
  constructor(cardData) {
    this.cards = cardData.map(card => new Card(card))
    this.deck;
    this.currentRound;

  };

  start() {
      this.createDeck();
      this.newRound();
      this.printMessage(this.deck, this.currentRound);
      this.printQuestion(this.currentRound);

  };

  newRound() {
    this.currentRound = new Round(this.deck.cards);

  };

  createDeck() {
    this.deck = new Deck(this.cards);
  
  };

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)

  };

  printQuestion(round) {
      util.main(round);

  };

};

module.exports = Game;