class Deck {
  constructor(cards) {
    this.cards = cards;
    this.numberOfCards = 0;
  }

  findNumberOfCards() {
    this.numberOfCards = this.cards.length
  }
}

module.exports = Deck;