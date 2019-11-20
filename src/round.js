const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectAnswers = [];
    this.startTime = new Date();
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }




  module.exports = Round;
