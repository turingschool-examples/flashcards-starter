class Turn {
  constructor(guess, card) {
    this.guess = guess
    this.card = card
  }
  
  returnGuess() {
    return this.guess
  }

  returnCard() {
    return this.card
  }

  evaluateGuess(guess) {
    return guess === this.card.correctAnswer ? true : false
  }

  giveFeedback(result) {
    return result === true ? 'Correct!' : 'Incorrect!'
  }
}

module.exports = Turn
//npm test test/Turn-test.js