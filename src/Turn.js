class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }
  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    // console.log(this.card.correctAnswer)
    if (this.card.correctAnswer === this.guess) {
      return true
    } else {
      return false
    }
  }

  giveFeedback() {
    if (this.evaluateGuess() === true) {
      return 'Correct!'
    } else {
      return 'Incorrect!'
    }
  }
}

module.exports = Turn;