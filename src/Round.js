const dataSet = require('../src/data');


class Round {
  constructor(currentCardNumber) {
    // needs currentCard, guesses (id#), 
    this.currentCard = dataSet.prototypeData[currentCardNumber] || dataSet.prototypeData[0];

  }
  returnCurrentCard() {
    return this.currentCard;
  }
}

module.exports = Round;