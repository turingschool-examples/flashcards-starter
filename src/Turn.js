class Turn {
  constructor(guess, flashCard) {
    this.guess = guess;
    this.flashCard = flashCard;
    this.result = true;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.flashCard;
  }
  evaluateGuess() {
    if (this.guess !== this.flashCard.correctAnswer) {
      this.result = false;
    } else {
      this.result = true;
    }
  }
  giveFeedback() {
    if (this.result) {
      return 'correct';
    } else {
      return 'incorrect';
    }
  }
};

module.exports = Turn;
