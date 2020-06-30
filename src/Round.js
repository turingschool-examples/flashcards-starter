class Round {
  constructor(deck) {
    this.deck = deck
  }

  returnCurrentCard() {
    // console.log(this.deck[0])
    return this.deck.cards[0]
  }

}

module.exports = Round
//