const Turn = require('./Turn');

class Round{
  constructor(deck) {
    this.deck = deck;
    this.turns = 0
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    this.deck.cards.shift();
  }

}

module.exports = Round;
