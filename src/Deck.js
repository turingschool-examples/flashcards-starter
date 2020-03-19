class Deck {
  constructor(cards) {
    this.deck = cards;
  }
  
  countingCards() {
    return this.deck.length
  }
}
module.exports = Deck