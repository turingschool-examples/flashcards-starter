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
  evaluateGuess(card) {
    if(this.guess === card.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }
  giveFeedback(card) {
    if(this.guess === card.correctAnswer) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  }
};

module.exports = Turn;
