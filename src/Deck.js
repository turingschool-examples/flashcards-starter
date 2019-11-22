class Deck {
  constructor(card) {
    this.cards = card;
  }

  countCards() {
    return this.cards.length;
  }

}

module.exports = Deck;