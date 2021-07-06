//test if I need this to use th method or if it will work anyway.
const Turn = require('../src/Turn');
// const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = this.deck[this.turns];
    this.incorrectGuesses = [];
    //do we need a this.guess?
    this.currentTurn;
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(id) {
    this.currentTurn = new Turn(id, this.currentCard);
    this.turns += 1;
    let feedback = this.currentTurn.giveFeedback();
    return feedback;
  }

}

module.exports = Round;