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
  evaluteGuess() {
    if (this.guess === this.card.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }
  giveFeedback() {
    if (this.guess === this.card.correctAnswer) {
      return "Correct Answer!";
    } else {
      return "Incorrect Answer!";
    }
  }
}

module.exports = Turn;
