class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0
    this.incorrectGuesses = []
  }
  returnCurrentCard() {
    return this.deck.cards[0]
  }
  takeTurn() {
    this.turns++
  }
}

module.exports = Round