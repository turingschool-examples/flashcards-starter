class Deck {
  constructor(cardArr) {
    this.cards = cardArr;
  }
  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck;
