class Turn {
  constructor(guess, card) {
    this.guess = guess
    this.currentCard = card
    this.result = undefined
  }
  returnGuess() {
    return this.guess
  }
  returnCard() {
    return this.currentCard
  }
  evaluateGuess() {
    if(this.guess === this.currentCard.correctAnswer) {
      this.result = true
    } else {
      this.result = false
    }
    return this.result
  }
  giveFeedback() {
    if(this.result === true) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}
module.exports = Turn;
