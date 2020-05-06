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

  evaluateGuess(guess) {
    this.guess = guess;
    if (this.card.correctAnswer == this.guess) {
      console.log(this.card.correctAnswer);
      console.log(myGuess)
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    return this.evaluateGuess = true ? 'correct!' : 'incorrect!';
  }
}

module.exports = Turn