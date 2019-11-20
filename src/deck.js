class Deck {
  constructor(cards) {
    this.cards = [];
    this.totalCards;
  }

  addCards(newCard) {
    this.cards.push(newCard);
  }

  countCards() {
    this.totalCards = this.cards.length;
  }
}

module.exports = Deck;
