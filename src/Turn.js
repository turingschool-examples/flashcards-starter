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
      if (this.guess == this.card.correctAnswer) {
        return `${this.guess} is correct!`
      } else {
        return `${this.guess} is incorrect!`
      }
    }
}

module.exports = Turn;
