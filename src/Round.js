const dataSet = require('../src/data');
const Turn = require('./Turn');


class Round {
  constructor() {
    // needs currentCard, guesses (id#), 
    this.currentCard = dataSet.prototypeData[0];
    this.turns = 0;
    this.guesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess, card) {
    this.turns++;
    this.currentCard = dataSet.prototypeData[this.turns];
    let newTurn = (new Turn(guess, card));
    this.guesses.push(newTurn);
    return newTurn.evaluateGuess();
  };
}

module.exports = Round;