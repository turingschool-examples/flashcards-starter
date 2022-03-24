const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck
    this.currentCard = deck[0];
    this.turns = 0
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn() {

  }

  calculatePercentCorrect() {

  }

  endRound() {

  }

}
module.exports = Round
