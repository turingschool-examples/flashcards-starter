class Turn {
  constructor (guess, card) {
    this.guess = guess;
    this.answer = card.correctAnswer;
  }

  returnGuess() {
    return this.answer;
  }

  evaluateGuess() {
    if (this.guess === this.answer) {
      return true;
    }
    return false;
  }

  returnCard(card) {
    return card;
  }

  giveFeedback() {
    if (this.guess === this.answer) {
      return `YAAS QUEEN`;
    }
    return `FAIL`;
  }
}

module.exports = Turn;
