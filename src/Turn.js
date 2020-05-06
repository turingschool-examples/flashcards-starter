class Turn {
  constructor (userGuess, currentCard) {
    this.userGuess = userGuess
    this.currentCard = currentCard
  };

  returnGuess() {
    return this.userGuess;
  };

  returnCard() {
    return this.currentCard
  }

  evaluateGuess() {
    return (this.userGuess === this.currentCard.correctAnswer) ? 'Correct!' : 'Incorrect!';
  }

};

module.exports = Turn;