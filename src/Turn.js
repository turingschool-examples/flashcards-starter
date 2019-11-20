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
    if(this.guess == this.correctAnswer) {
      return "True"
    } else {
      return "False"
    }
  }

  giveFeedback() {
    if(this.guess == this.correctAnswer) {
      return "Correct!"
    } else {
      return "Incorrect!"
    }
  }
}


module.exports = Turn;
