class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.correct = true;
    this.card = card;
  }

  returnGuess() {
    return this.guess
  }
  returnCard(newCard) {
    return newCard
  }
  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      this.correct = true
      return true
    } else {
      this.correct = false
      return false
    }
  }
  giveFeedback() {
    if(this.correct) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}



module.exports = Turn;
