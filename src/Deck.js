class Deck {
  constructor(cards) {
    this.cards = cards;
    console.log(cards);
  }
  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck;