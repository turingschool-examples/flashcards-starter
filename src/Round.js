const Turn = require('../src/Turn');
class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[0]
  }
  takeTurn() {
    const turn = new Turn()
    return turn
  }
}

module.exports = Round;