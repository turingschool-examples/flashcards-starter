class Deck {
  constructor(cardDeck = []) {
    this.cardDeck = cardDeck;
    this.cardCount = this.cardDeck.length;
  }

  countCards() {
    this.cardCount = this.cardDeck.length;
    return this.cardDeck.length;
  }
}

module.exports = Deck;
