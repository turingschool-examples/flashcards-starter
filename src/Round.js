const Turn = require('./Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.incorrectGuesses = [];
    this.turns = 0;
    this.currentCard = this.turns;
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess, card) {
    let currentTurn = new Turn(guess, card);
    this.turns++;
    
    return currentTurn;
  }
  calculatePercentCorrect() {

  }
  endRound() {

  }
}

module.exports = Round;
