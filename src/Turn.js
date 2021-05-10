class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.cardInPlay = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.cardInPlay;
  }

  evaluateGuess() {
    if (this.guess === this.cardInPlay['correctAnswer']) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    if (this.evaluateGuess) {
      return 'Correct!';
    } else {
      return 'Inorrect!';
    }
  }

};

module.exports = Turn;
