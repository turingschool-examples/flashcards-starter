class Turns {
  constructor() {
    this.currentCard = new Card(id, question, userAnswer, correctAnswer)
    this.userGuess = false
  }

  returnGuess() {
    return this.userGuess
  }

  returnCard() {
    return this.currentCard

  }
  
  evaluateGuess() {
    if (this.userGuess === this.currentCard.correctAnswer) {
      this.userGuess = true
    }
  }

  giveFeedback() {
    if (this.userGuess === this.currentCard.correctAnswer) {
      return 'Correct!'
    } else {
      return 'Incorrect!'
    }
  }
}