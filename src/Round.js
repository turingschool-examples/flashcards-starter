const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck === undefined ? [] : deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  nextCard() {
    this.deck.shift();
    return this.deck;
  }

  takeTurn(guess, card) {
    const turn = new Turn(guess, card);
    this.turns++;
    this.nextCard();
  }

  calculatePercentageCorrect() {

  }

}

module.exports = Round;