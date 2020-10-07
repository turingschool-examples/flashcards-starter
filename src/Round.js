const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(guess) {
    this.turns++;
    let topCard = this.returnCurrentCard();
    let turn = new Turn(guess, topCard);
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(topCard.id);
    }
    this.deck.shift();
    return turn.giveFeedback(this.incorrectGuesses);
  }
}

module.exports = Round;
