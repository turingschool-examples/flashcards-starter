const dataSet = require('../src/data');
const Turn = require('./Turn');


class Round {
  constructor(currentCardNumber) {
    // needs currentCard, guesses (id#), 
    this.currentCard = dataSet.prototypeData[currentCardNumber] || dataSet.prototypeData[0];
    this.turns = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess, card) {
    this.turns.push(new Turn(guess, card));
  };
}

module.exports = Round;