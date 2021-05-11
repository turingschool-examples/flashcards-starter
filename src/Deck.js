class Deck {
    constructor(cards) {
    this.cards = cards;
  }

  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck;

// npm test test/Deck-test.js
