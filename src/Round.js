class Round {
  constructor(deck) {
    this.currentCard = deck.cards[0]
  }
  returnCurrentCard() {
    return this.currentCard
  }
}
module.exports = Round