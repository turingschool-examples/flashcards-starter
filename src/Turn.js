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

  evaluateGuess() {
    if (this.guess === this.currentCard.correctAnswer) {
      return true;
    } else if (this.guess !== this.currentCard.correctAnswer) {
      return false;
    };
  };
};

module.exports = Turn;
