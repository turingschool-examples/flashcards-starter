//test if I need this to use th method or if it will work anyway.
const Turn = require('../src/Turn');
// const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = this.deck[this.turns];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  //you are at takeTurn()

}

module.exports = Round;