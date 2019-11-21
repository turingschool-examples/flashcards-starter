class Turn {
  constructor (guess, card) {
    this.guess = guess;
    this.card = card
    // this.answer = card.correctAnswer;
  }

  returnGuess() {
    return this.guess;
  }

  evaluateGuess() {
    // console.log(this.card.correctAnswer);
    if (this.returnGuess() === this.card.correctAnswer) {
      return true;
    } else {
    return false;
    }
  }

  returnCard(card) {
    return card;
  }

  giveFeedback() {
    if (this.guess === this.card.correctAnswer) {
      return `YAAS QUEEN`;
    }
    return `FAIL`;
  }
}

module.exports = Turn;
