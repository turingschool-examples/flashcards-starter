class Round {
  constructor(deckObject) {
    this.deck = deckObject
    this.currentCard = deckObject.deck[0]
    this.turns = 0
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn() {
    return this.turns += 1
  }

  calculatePercentCorrect() {

  }

  // endRound() {
  //   return `Round over! ** You answered ${} % of the questions correctly!`
  // }
}

module.exports = Round