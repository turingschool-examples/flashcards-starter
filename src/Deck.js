class Deck {
  constructor(array) {
    this.cards = array
  }

  countCards() {
    return this.cards.length
  }
}

module.exports = Deck