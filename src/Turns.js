class Turns {
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
    if (this.card.correctAnswer == this.guess) {
      console.log(this.card.correctAnswer);
      console.log(this.guess)
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    if (this.evaluateGuess = true) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  }
}

module.exports = Turns