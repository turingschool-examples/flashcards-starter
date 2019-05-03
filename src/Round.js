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
  takeTurn(guess) {
    const turn = new Turn(guess, this.deck[this.turns]);
    this.turns++;
    if (turn.evaluateGuess() === null) {
      this.incorrectGuesses.push()
      return turn.giveFeedback()
    } else {
      return turn.giveFeedback();
    }
  }
}

module.exports = Round;