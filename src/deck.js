class Deck {
  constructor(cards) {
    this.cards = cards;
    this.totalCards;
  }

  addCards(newCard) {
    this.cards.push(newCard);
  }

  countCards() {
    this.totalCards = this.cards.length;
    return this.totalCards;
  }
}

module.exports = Deck;
