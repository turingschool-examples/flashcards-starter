class Deck {
  constructor(cards) {
    if (Array.isArray(cards)) {
      this.cards = this.verifyCards(cards);
    }
  }
  countCards() {
    return this.cards ? this.cards.length : undefined;
  }
  verifyCards(cards) {
    return cards.filter(card => card instanceof Card && card.invalidCard === false);
  }
}

module.exports = Deck;
const Card = require('../src/Card');
