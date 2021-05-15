class Deck {
  constructor(arrayCards) {
    this.cardsArray = arrayCards;
  }
  countCards() {
    return this.cardsArray.length;
  }
}

module.exports = Deck;
