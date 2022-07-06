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
  evaluateCard() {
    if (this.guess === this.card.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }
  giveFeedback() {
    if (this.evaluateCard() === true) {
      return "Correct";
    } else {
      return "Incorrect";
    }
  }
}

module.exports = Turn;
