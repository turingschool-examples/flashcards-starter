const Deck = class {
  constructor(cards) {
    this.cards = cards;
  }

  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck