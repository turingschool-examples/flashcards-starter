class Deck {
  constructor(cards) {
    this.cards = [];
  }

  addCard(card) {
    this.cards.push(card);
  }

  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck;
