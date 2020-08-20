class Deck {
  constructor(cardsInDeck) {
    this.cardsInDeck = cardsInDeck;
    this.cardCount = 0;
  }
  countCards() {
    this.cardCount = this.cardsInDeck.length;
  }
  
}












module.exports = Deck;
