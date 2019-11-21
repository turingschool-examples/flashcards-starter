const Deck = require('../src/Deck');

class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    return this.guess === this.card.correctAnswers ? true : false;
}
  giveFeedBack() {
    return this.evaluateGuess() ? "Correct" : "Incorrect";
  }
};

module.exports = Turn;
