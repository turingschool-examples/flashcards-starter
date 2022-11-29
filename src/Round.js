const Turn = require("../src/Turns");
const Card = require("../src/Card");
const newTurn = new Turn();

class Round {
  constructor(currentCard) {
    this.currentCard = currentCard;
  }
  returnCurrentCard() {
    return this.currentCard;
  }
}
module.exports = Round;
