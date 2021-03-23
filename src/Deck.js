class Deck {
  constructor(cards) {
    this.cards = [];
    cards.forEach((element) => {
      this.cards.push(element);
    });

  }

  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck;
