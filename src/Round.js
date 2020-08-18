const Turn = require('../src/Turn');

class Rounds{
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrect = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard());
    if(!turn.evaluateGuess()) {
      this.incorrect.push(turn.card.id);
    }
    this.turns++;
    return turn.giveFeedBack();
  }
}

module.exports = Rounds;
