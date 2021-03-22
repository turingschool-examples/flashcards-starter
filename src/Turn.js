class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.currentCard = card;
  };

  returnGuess() {
    return this.guess;
  };

  returnCard() {
    return this.currentCard;
  };

  evaluateGuess(card) {
    if (this.guess === card.correctAnswer) {
      return true;
    } else {
      return false;
    }
  };

  giveFeedback(card) {
    if (this.evaluateGuess(card) === true) {
      return "correct!";
    } else {
      return "incorrect!";
    }
  };
};

module.exports = Turn;
