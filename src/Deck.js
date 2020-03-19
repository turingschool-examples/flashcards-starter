// const Card = require('../src/Card');
// const Turn = require('../src/Turn');

class Deck {
  // Deck should be initialized with an array of Card objects
  constructor(cards) {
    this.cards = cards;
  }
  countCards() {
  // Deck should know how many Cards are in the Deck
    return this.cards.length;
  }
}

module.exports = Deck;
