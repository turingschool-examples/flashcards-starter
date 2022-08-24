class Deck {
  constructor(currentCards) {
    this.cardsInDeck = currentCards
  }
  
  countCards() {
    return this.cardsInDeck.length
  }
}

module.exports = Deck;
