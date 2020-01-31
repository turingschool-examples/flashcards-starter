class Deck {
  constructor(cards) {
    this.cardsInDeck = cards;
  }

  countCards() {
    return this.cardsInDeck.length;
  }
}

module.exports = Deck;
