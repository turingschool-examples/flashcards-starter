const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess) {
    this.turns += 1;
    let turn = new Turn(guess, this.currentCard);
    this.currentCard = this.deck[this.turns];
  }
}

module.exports = Round;
