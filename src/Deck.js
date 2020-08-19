class Deck {
  constructor(card) {
    this.deck = card;
    }
    countCards = () => {
      return this.deck.length
  }
}
module.exports = Deck;