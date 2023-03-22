class Deck {
    constructor(sampleCards) {
    this.cards = sampleCards
    }

countCards() {
  return this.cards.length
}
}

module.exports = Deck;