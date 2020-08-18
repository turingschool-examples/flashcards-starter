class Deck {
  constructor(cards) {
    this.cards = cards
  }

  countCards() {
    if (this.cards) {
      return this.cards.length
    }
  }
}
module.exports = Deck