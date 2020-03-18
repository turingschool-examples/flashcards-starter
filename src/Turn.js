class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.currentCard = currentCard;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    return this.guess === this.currentCard.correctAnswer ? true : false;
  }

  giveFeedback() {
    return this.guess === this.currentCard.correctAnswer ? 'correct!' : 'incorrect!';
  }
}

module.exports = Turn;
