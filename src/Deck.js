class Deck {
  constructor(cardsArray) {
    this.cards = cardsArray;
  }

  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck;
