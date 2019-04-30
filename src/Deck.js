class Deck {
  constructor(card) {
    this.card = card
  }
  countCards() {
    return this.card.length
  }
}


module.exports = Deck
