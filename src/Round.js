const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.incorrectGuesses = [];
    this.turns = 0;
  }
  returnCurrentCard() {
    return this.deck[this.turns];
  }
  takeTurn(guess, card) {
    const turn = new Turn(guess, card);
    this.turns++;
    this.deck.shift(card);

  }
}

module.exports = Round;