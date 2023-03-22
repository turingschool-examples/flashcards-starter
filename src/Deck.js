class Deck {
  constructor(cards) {
    this.cards = cards
  }
  countCards() {
    let cardAmount = this.cards.length;
    return cardAmount;
  }
}

module.exports = Deck;