const Turn = require('../src/Turn');
class Round {
  constructor(deck) {
    this.deck = deck.cardDeck
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }
}

module.exports = Round;