class Deck {
  constructor(cardSet) {
    this.cardSet = cardSet;
  }
  countCards() {
    return this.cardSet.length;
  }
}


module.exports = Deck;
