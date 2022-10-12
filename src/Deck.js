class Deck {
  constructor(cardCollection) {
    this.cardCollection = cardCollection
  }
  countCards = () => {
    return this.cardCollection.length
  }
}

module.exports = Deck