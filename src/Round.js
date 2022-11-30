const dataSet = require('../src/data');
const Turn = require('./Turn');


class Round {
  constructor(currentCardNumber) {
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
    this.guesses.push(new Turn(guess, card));
  };
}

module.exports = Round;