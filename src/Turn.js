class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.currentCard = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    return (this.guess === this.currentCard.correctAnswer);
  }

  giveFeedback() {
    if (this.evaluateGuess()) {
      return "correct!";
    } else {
      return "incorrect!";
    }
  }
}

module.exports = Turn;