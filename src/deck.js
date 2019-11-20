class Deck {
  constructor(cards) {
    this.cards = [];
  }

  addCards(newCard) {
    this.cards.push(newCard);
    console.log(this.cards);
  }
}

module.exports = Deck;
