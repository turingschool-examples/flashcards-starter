class Deck {
  constructor(cards) {
    this.allCards = cards;
  }
  countCards() {
    return this.allCards.length;
  }
}

module.exports = Deck;
