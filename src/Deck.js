class Deck {
  constructor(cardsInDeck) {
    this.cardsInDeck = cardsInDeck;
    this.cardCount = 0;
  }
  countCards() {
    this.cardCount = this.cardsInDeck.length;
    return this.cardCount
  }

}

module.exports = Deck;
