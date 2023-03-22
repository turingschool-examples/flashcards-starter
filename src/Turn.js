class Turn {
  constructor(usersGuess, card) {
    this.guess = usersGuess;
    this.card = card;
    // console.log(this.card)
  };
  returnGuess() {
    return this.guess;
  };
  returnCard() {
    return this.card;
  };
  evaluateGuess() {
    return this.guess === this.card.correctAnswer
  };
  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'correct!'
    } else {
      return 'incorrect!'
    };
  };
};






module.exports = Turn;
