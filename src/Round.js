

class Round {
  constructor(deck) {
    this.deck = deck
    this.incorrectGuesses = []
    this.turns = 0;
  }

  returnCurrentCard() {
    return this.deck.card[this.turns]
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard())
    this.turns += 1;
  }
}

module.exports = Round
