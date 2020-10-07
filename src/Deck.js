class Deck {
  constructor(cards) {
    this.cardSet = cards;
  }
  countCards() {
    return this.cardSet.length;
  }
}


module.exports = Deck;
