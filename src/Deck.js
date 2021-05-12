class Deck {
  constructor(cards) {
    this.cards = cards
  } 
  countCards() {
    return this.deck.length
  }
}

module.exports = Deck