class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.card = currentCard;
  };

  returnGuess() {
    return this.guess;
  };

  returnCard() {
    return this.card;
  };

  evaluateGuess() {
    return this.guess === this.card.correctAnswer;
  };

  giveFeedback() {
    if(this.evaluateGuess()) {
      return "Correct!"
    } else {
      return "Incorrect!"
    };
  };
};

module.exports = Turn;
