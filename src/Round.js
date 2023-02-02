const Turn = require('../src/Turn');

class Round {
  constructor(deckObject) {
    this.deck = deckObject
    this.currentCard = deckObject.cards[0]
    this.turns = 0
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(userGuess) {
    this.turns += 1
    var newTurn = new Turn(userGuess, this.currentCard)
    if (!newTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id) 
    } 
    this.currentCard = this.deck.cards[this.turns]
    return newTurn.giveFeedback()
  }

  calculatePercentCorrect() {
    const percent = (100 - ((this.incorrectGuesses.length / this.turns) * 100)) 
    return percent   
  }

  endRound() {
    console.log(`Round over! ** You answered ${this.calculatePercentCorrect()} % of the questions correctly!`)
    return `Round over! ** You answered ${this.calculatePercentCorrect()} % of the questions correctly!`
  }
}

module.exports = Round