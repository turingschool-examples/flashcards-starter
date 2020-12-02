const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    let cardIndex = 0;
    return this.deck[cardIndex];
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    return turn.giveFeedback();
  }

};

module.exports = Round;
