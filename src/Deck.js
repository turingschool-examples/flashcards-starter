class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  countCards = () => this.cards.length;
}

module.exports = Deck;