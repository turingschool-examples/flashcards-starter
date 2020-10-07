class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  };
  returnGuess() {
    console.log(this.card)
    return this.guess;
  };
  returnCard() {
    return this.card;
  };
  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      return true;
    }
    else if (this.guess !== this.card.correctAnswer) {
      return false;
    };
  };
  giveFeedback() {
    if (this.evaluateGuess() === true) {
      return 'correct!'
    }
    else if (this.evaluateGuess() === false) {
      return 'incorrect!'
    };
  };
};


module.exports = Turn;
