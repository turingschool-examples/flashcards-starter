class Turn {
  constructor(currentCard, guess) {
    this.card = currentCard;
    this.guess = guess;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    return (this.guess === this.card.correctAnswer) ? true : false;
  }

  giveFeedback() {
    return (this.guess === this.card.correctAnswer) ? 'correct!' : 'incorrect!';
  }

}

module.exports = Turn;