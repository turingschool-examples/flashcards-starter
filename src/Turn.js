class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.card = currentCard;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
    return this.card.correctAnswer === this.guess ? true : false;
  }
  giveFeedback() {
    return this.evaluateGuess() ? 'correct!' : 'incorrect!';
  }
};

module.exports = Turn
