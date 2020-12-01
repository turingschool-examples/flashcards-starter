class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.card = card;
  };
  returnGuess() {
    return this.userGuess;
  };
  returnCard() {
    return this.card;
  };
  evaluateGuess() {
    return (this.userGuess === this.card['correctAnswer']);
  };
  giveFeedback() {
    let feedback = this.evaluateGuess();
    if (feedback) {
      return `correct!`;
    } else {
      return `incorrect!`;
    };
  };
};

module.exports = Turn;
