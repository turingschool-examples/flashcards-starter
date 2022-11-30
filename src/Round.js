const dataSet = require('../src/data');
const Turn = require('./Turn');


class Round {
  constructor() {
    this.currentCard = dataSet.prototypeData[0];
    this.turns = 0;
    this.correctGuesses = [];
    this.incorrectGuesses = [];
  };

  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn(guess, card) {
    this.turns++;
    this.currentCard = dataSet.prototypeData[this.turns];
    let newTurn = (new Turn(guess, card));
    if (newTurn.evaluateGuess()) {
      this.correctGuesses.push(newTurn.card.id);
    } else {
      this.incorrectGuesses.push(newTurn.card.id);
    }
    return newTurn.giveFeedback();
  };

  calculatePercentCorrect() {
    return this.correctGuesses.length / (this.correctGuesses.length + this.incorrectGuesses.length);
  };

  endRound() {
    let percentCorrect = this.calculatePercentCorrect().toFixed(2) * 100;
    return `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`;
  };
};

module.exports = Round;