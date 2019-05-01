class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.currentCard = card;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    return this.currentCard.correctAnswer === this.userGuess ? true : false;
  }

  giveFeedback() {
    return this.currentCard.correctAnswer === this.userGuess ? 'Correct!' : 'Incorrect!';
}

module.exports = Turn;