class Deck {
  constructor(cards) {
    // this.firstCard = card1
    // this.secondCard = card2
    // this.thirdCard = card3
    this.cards = cards
  }

  countCards() {
    return this.cards.length
  }
}


module.exports = Deck
