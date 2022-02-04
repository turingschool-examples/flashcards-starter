const Deck = require("../src/Deck.js");

class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    // this.turnCount = 0;
  }

  returnGuess() {
    return this.guess
  }

  returnCard() {
    return this.card
  }

  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      return true
    } else {
      return false
    }
  }

  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}

module.exports = Turn
