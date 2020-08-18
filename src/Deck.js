class Deck {
  constructor(card) {
    this.deck = card;
    this.countCards = () => {
      return card.length
    }
  }
}
module.exports = Deck;