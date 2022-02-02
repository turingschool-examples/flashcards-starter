class Deck {
  constructor(cardDeck = []) {
    this.cardDeck = cardDeck;
    this.cardCount = this.cardDeck.length;
  }
}

module.exports = Deck;
