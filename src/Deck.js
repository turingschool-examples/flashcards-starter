class Deck {
  constructor(cards) {
    this.cards = cards
  }

  countCards() {
    return this.cards.length
  }
}


module.exports = Deck 


// it should know how many cards are in the deck
// this.cards.length with a countCards() method


