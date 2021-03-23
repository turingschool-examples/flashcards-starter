const Turn = require('../src/Turn');

class Round {
  constructor(deck){
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard(){
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.deck.cards[this.turns]);
    this.turns += 1;
    return turn.giveFeedback();
  }
}

module .exports = Round;
