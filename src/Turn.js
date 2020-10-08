class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.turns = 0;
  };

  returnGuess() {
    return this.guess;
  };

  returnCard() {
    return this.card;
  };

  evaluateGuess() {
    return this.card.correctAnswer === this.guess ? true : false;
  };

  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'correct!'
    }
    else if (!this.evaluateGuess()) {
      return 'incorrect!'
    }
  };
};


module.exports = Turn;
