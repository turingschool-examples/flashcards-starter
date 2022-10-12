class Deck {
  constructor(groupOfCards) {
    this.cards = groupOfCards;
  }

  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck;