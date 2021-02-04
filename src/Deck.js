class Deck {
  constructor(cards) {
    this.currentCards = cards;
  }

  countCards() {
    return this.currentCards.length;
  }
}


module.exports = Deck;
