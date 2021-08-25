class Deck {
  constructor(cardsToAdd) {
    this.deck = cardsToAdd;
  }

  countCards() {
    return this.deck.length;
  }
}



module.exports = Deck;
