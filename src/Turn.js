class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.currentCard = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    return (this.guess === this.currentCard.correctAnswer ? true : false);
  }

  giveFeedback() {
    const isCorrect = this.evaluateGuess();
    return (isCorrect ? 'Correct!' : 'Incorrect!');
  }
}

module.exports = Turn;


