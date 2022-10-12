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
  evaluateGuess() {
    return this.guess === this.card.correctAnswer
    // if(this.guess === this.card.correctAnswer) {
    //   return true
    // } else if (this.guess != this.card.correctAnswer) {
    //   return false
    // }
    //Return true or false? Ask Sarah if this is the same thing?
  }
  giveFeedback() {
    if(this.evaluateGuess()) {
      return "correct!"
    } else if (!this.evaluateGuess()) {
      return "incorrect!"
    }
  }
}

module.exports = Turn