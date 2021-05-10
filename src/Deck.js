class Deck {
  constructor(card1, card2, card3) {
    this.cards = [card1, card2, card3];
  }

  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck;

// npm test test/Deck-test.js
