class Deck {
  constructor(deckCards) {
    this.deckCards = deckCards;
  }

  countCards() {
    return this.deckCards.length;
  }
}

module.exports = Deck;