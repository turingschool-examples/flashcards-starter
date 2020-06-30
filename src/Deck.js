class Deck {
  constructor(cards) {
    this.cards = cards;
    this.cardCount = cards ? this.cards.length : 0;
  }
}

module.exports = Deck;