class Deck {
  constructor(cards = []) {
    this.cards = cards;
    this.countedCards = 0;
  }
  countCards()  {
    this.cards.forEach((cards) => {
      this.countedCards = (this.countedCards +1);
    });
  }
}

module.exports = Deck;
