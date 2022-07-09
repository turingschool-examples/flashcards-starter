class Deck {
  constructor(cards) {
    this.deckOfCards = cards;
  }
  countCards() {
    return this.deckOfCards.length;
  }
}

module.exports = Deck;
