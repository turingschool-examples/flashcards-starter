class Deck {
  constructor(cards) {
    this.cards = cards || [];
    // this.cardCount = cards ? this.cards.length : 0;
  }
  countCards = () => {
    return this.cards.length
  }
}

module.exports = Deck;