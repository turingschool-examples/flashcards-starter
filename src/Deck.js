
class Deck {
  constructor(cards) { //data: array of objects
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
