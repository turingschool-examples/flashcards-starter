class Deck {
  constructor(cards) {
    this.cards = cards;
  };
  countCards() {
    this.cards = this.cards.length;
    return this.cards;
  }
};




module.exports = Deck;