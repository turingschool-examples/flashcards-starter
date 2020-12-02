const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Turn {
  constructor(answer, card) {
    this.answer = answer;
    this.card = card;
  }

  returnGuess() {
    return this.answer;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    return this.answer === this.card.correctAnswer ? true : false;
  }
}

module.exports = Turn;