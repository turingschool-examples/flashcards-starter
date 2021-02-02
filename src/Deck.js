class Deck {
  constructor(cardsArr = []) {
    this.cards = cardsArr;
  }
  countCards() {
    let cardCount = this.cards.length;
    return cardCount;
  }
}

module.exports = Deck;