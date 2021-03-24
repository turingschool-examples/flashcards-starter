class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.isCorrect = false;
  }

  returnGuess () {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess(guess) {
    if(guess === this.card.correctAnswer) {
      this.isCorrect = true;
      return this.isCorrect;
    } else {
      this.isCorrect = false;
      return this.isCorrect;
    }
  }

  giveFeedback() {
    if(this.isCorrect === true) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  }
}

module.exports = Turn;
