class Deck {
  constructor(cards) {
    this.cards = cards || [];
  };

  countDeck() {
    return this.cards.length;
  }
};


















module.exports = Deck;