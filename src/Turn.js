class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.currentCard = card;
  }

  getGuess() {
    return this.guess;
  }

  getCard() {
    return this.currentCard;
  }

  isCorrectlyAnswered() {
    return (this.guess === this.currentCard.correctAnswer ? true : false);
  }

  getFeedback() {
    return (this.isCorrectlyAnswered() ? 'correct!' : 'incorrect!');
  }
}

module.exports = Turn;


