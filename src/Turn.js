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
    if (this.guess === this.flashCard.correctAnswer) {
      this.guess = true;
    } else {
      this.guess = false;
    }
  }
  giveFeedback() {
    if (this.guess) {
      return 'correct';
    } else {
      return 'incorrect';
    }
  }
};

module.exports = Turn;
