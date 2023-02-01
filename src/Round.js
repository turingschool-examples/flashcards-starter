class Round {
  constructor(deckObject) {
    this.deck = deckObject
    this.currentCard = deckObject.deck[0]
    console.log(deckObject.deck[0])
    this.turns = 0
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(userGuess, cardObject) {
    this.turns += 1
    var newTurn = new Turn(userGuess, cardObject)
    if (newTurn.evaluateGuess()) {
    
  } else {
    this.incorrectGuesses.push(userGuess) 
  }
}

  calculatePercentCorrect() {

  }

  // endRound() {
  //   return `Round over! ** You answered ${} % of the questions correctly!`
  // }
}

module.exports = Round