class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.card = currentCard;
    this.isCorrect = null;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
    if (this.card.correctAnswer === this.guess) {
      this.isCorrect = true
    }
    else {
      this.isCorrect = false
    }
  }
  giveFeedback() {
    return this.isCorrect === true ? 'correct!' : 'incorrect!'
  }
}
