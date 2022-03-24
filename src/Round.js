const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = deck.cards[0];
    this.currentTurn;
  }

  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.currentCard)
    if (!this.currentTurn.evaluateGuess() === true) {
      this.incorrectGuesses.push(this.currentCard)
    }
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];
  };

}

module.exports = Round;
