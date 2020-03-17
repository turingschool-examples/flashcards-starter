const Turn = require('../src/Turn')
class Round {
  constructor(deck) {
    this.turns = 0;
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
  }

  takeTurn(guess) {
    this.turns++
    var turn = new Turn(guess, this.currentCard)
    return turn;
  }
  returnCurrentCard() {
    return this.currentCard
  }
}

module.exports = Round;
