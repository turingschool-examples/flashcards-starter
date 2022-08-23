const Turn = require('../src/Turn')
class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.correctGuesses = [];
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {

  }

  takeTurn() {
    let turn = new Turn(guess, this.returnCurrentCard())
  }
}
