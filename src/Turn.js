class Turn {
  constructor(guess, card) {
    this.userGuess = guess;
    this.currentCard = card;
    this.correct;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    if (this.userGuess === this.currentCard.correctAnswer) {
      this.correct = true;
      return true;
    } else {
      this.correct = false;
      return false;
    }
  }

  giveFeedback() {
    if (this.correct === true) {
      return 'Correct!';
    } else {
      return 'Incorrect!';
    }
  }

}

module.exports = Turn;
