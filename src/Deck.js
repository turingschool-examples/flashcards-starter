class Deck {
  constructor([card1, card2, card3]) {
    this.firstCard = card1
    this.secondCard = card2
    this.thirdCard = card3
    this.deck = [card1, card2, card3]
  }

  countCards() {
    return this.deck.length
  }
}


module.exports = Deck
