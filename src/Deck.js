class Deck {
  constructor(cards) {
    this.cards = [];
    cards.forEach(card => {
      this.cards.push(card);
    });
  }
  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck;
