class Deck {
  constructor(obj) {
    this.cards = obj;
  }
  countCards() {
    return this.cards.length;
  }
}






module.exports = Deck;