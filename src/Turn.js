const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const card = require('./Card');

class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.isCorrect = false;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }
      giveFeedback();
  }

  giveFeedback() {
    if (this.isCorrect === true) {
      return "Correct!";
    } else {
      return "Incorrect!";
    }
  }

};

module.exports = Turn;


