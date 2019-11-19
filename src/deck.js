class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  countCards(cards) {
    return this.cards.length;
  }
}

module.exports = Deck;
