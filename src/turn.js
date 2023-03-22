
class Turn {
  constructor(guess, cardObj) {
    this.guess = guess
    this.card = cardObj
  }
  returnGuess() {
    return this.guess
  }
  returnCard() {
    return this.card
  }
  evaluateGuess() {
    return this.guess === this.card.correctAnswer
  }
  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}

module.exports = Turn