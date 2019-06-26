class Deck {
  constructor (cards) {
    this.cardDeck = cards || [];
  }

  countCards(){
    return this.cardDeck.length;
  }

  addCardToDeck(card) {
    this.cardDeck.push(card)
  }
}

module.exports = Deck

