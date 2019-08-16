class Turn {
  constructor(guess, cardObj) {
    this.guess = guess;
    this.card = cardObj

  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      return true
    } else {
      return false
    }
    }

  giveFeedback() {
    if (this.guess === this.card.correctAnswer) {
      return 'Correct!'
    } else {
      return 'Incorrect!'
    }
  }
}


module.exports = Turn;