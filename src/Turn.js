class Turn {
  constructor(guess, cardID) {
    this.guess = guess
    this.cardID = cardID
  }
  
  returnGuess() {
    return this.guess
  }
}

module.exports = Turn
//npm test test/Turn-test.js