class Deck {
  constructor(allCards) {
    this.allCards = allCards;
  }

  countCards() {
    return this.allCards.length;
  }
}

module.exports = Deck;
