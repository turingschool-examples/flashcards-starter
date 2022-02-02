var Card = require('./Card');

class Turn {
  constructor(playerGuess, card) {
    this.playerGuess = playerGuess;
    this.card = card;
    this.currentCard = card;
  }
  returnCard(card) {
    return card
  }
  returnGuess() {
    return this.playerGuess;
  }
  evaluateGuess() {
    if(this.playerGuess === this.card.correctAnswer) {
      return true;
    }
    return false;
  }
  giveFeedback() {
    if(this.playerGuess === this.card.correctAnswer) {
      return 'correct!'
    }
    return 'incorrect!'
  }
}


module.exports = Turn;
