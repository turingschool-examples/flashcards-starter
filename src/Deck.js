class Deck {
  constructor(cards) {
    this.cards = [];
    cards.forEach((element) => {
      this.cards.push(element);
    });

  }
}

module.exports = Deck;
