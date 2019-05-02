class Deck{
  constructor(cardInstance) {
    this.cards = cardInstance || [];
  }
  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck;