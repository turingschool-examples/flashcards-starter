class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    console.log('<<>>', this.deck.cards[0])
    return this.deck.cards[0]
  }

  takeTurn() {
    return this.turns
  }
}

module.exports = Round;
