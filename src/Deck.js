class Deck {
  constructor(card) {
    this.deck = card;
    }
    countCards = () => this.deck.length
}
module.exports = Deck;