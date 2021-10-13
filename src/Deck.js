class Deck {
  constructor(cardsInDeck) {
    this.cards = cardsInDeck;
  }

  countCards() {
    return this.cards.length;
  }
}


module.exports = Deck;