class Deck {
  constructor(cards) {
    this.cards = cards;
  }
  
  countCards() {
    return this.cards.length;
  }
}
// should know how many cards are in the Deck...
module.exports = Deck;
