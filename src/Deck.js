class Deck {
  constructor(deck) {
    this.cards = deck
  }
  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck;
