class Turn {
  constructor(guess, card) {
    this.guess = guess
    this.card = card
  }
  
  returnGuess() {
    return this.guess
  }
}

module.exports = Turn
//npm test test/Turn-test.js