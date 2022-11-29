const Turn = require("../src/Turns");
const Card = require("./Card");
const Card1 = require("../src/Card");
const newTurn = new Turn();

class Round {
  constructor(currentCard, newTurn) {
    this.currentCard = currentCard;
    this.turn = newTurn;
    this.turns = 0;
  }
  returnCurrentCard() {
    return this.turn.returnCard();
  }
  takeTurn() {
    this.turns++;
    this.currentCard = new Card();
    return new Turn();
  }
}
module.exports = Round;
