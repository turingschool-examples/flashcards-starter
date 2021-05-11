
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

  evaluateGuess() {
    return (this.guess === this.card.correctAnswer) ? this.result = true : this.result = false;
  }

  giveFeedback() {
    return (this.result) ? "Correct!" : "Incorrect!";
  }
}

module.exports = Turn;
