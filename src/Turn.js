const Game = require('./Game');
const Card = require('./Card');
const Deck = require('./Deck');

class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.cardInPlay = currentCard;
    this.result = false;
  }
  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.cardInPlay;
  }

  evaluateGuess(cardInPlay) {
    if (this.guess === this.cardInPlay.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    if (this.guess === this.cardInPlay.correctAnswer) {
      return `Correct!`;
    } else {
      return `Incorrect!`;
    }
  }
};

module.exports = Turn;
