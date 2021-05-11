class Turn {
  constructor(guess, currentCard) {
    this.guess = guess
    this.currentCard = currentCard
  }
  returnGuess() {
    return this.guess
  }
  returnCard() {
    return this.currentCard
  }
  evaluateGuess() {
    return this.guess === this.currentCard.correctAnswer ? true : false
    
  }
  giveFeedBack() {
    return this.evaluateGuess() === true ? 'correct!' : 'incorrect!'
  }
}

module.exports = Turn