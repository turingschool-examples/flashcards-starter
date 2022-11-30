class Round {
  constructor(deck) {
    this.deck = deck
    this.turn = 0
    this.incorrectGuesses = []
  }
  returnCurrentCard() {
    return this.deck.cards[0]
  }
}

module.exports = Round