const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
  }

  returnCurrentCard() {
    return this.deck.cards[0]
  }

  takeTurn(currentGuess) {
    const turn = new Turn(currentGuess, this.deck.cards[0]);
    this.turns++
    
  }
}

module.exports = Round;