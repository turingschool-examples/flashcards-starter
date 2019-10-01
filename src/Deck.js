class Deck {
  constructor(cardsInDeck) {
    this.cardsInDeck = cardsInDeck;
  }
  countCards() {
    return this.cardsInDeck.length;
  }
}

module.exports = Deck;