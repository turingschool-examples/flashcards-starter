class Decks{
  constructor(cards = []) {
    this.cards = cards;
  }

  countCards() {
    return this.cards.length;
  }
}

module.exports = Decks;
