class Deck {
  constructor(deck) {
    this.deckOfCards = deck;
  }

  countingCards() {
    return this.deckOfCards.length
  }
}
module.exports = Deck