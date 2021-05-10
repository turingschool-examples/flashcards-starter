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

  }

  giveFeedback() {

  }
}

module.exports = Turn;

// npm test test/Turn-test.js