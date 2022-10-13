const Turn = require('./Turn')
class Round {
  constructor(deck) {
    this.deck = deck.cards
    this.turns = 0
    this.incorrectGuesses = []
    this.currentCard = this.deck[0]
  }
  returnCurrentCard() {
    this.currentCard = this.deck[0]
    return this.currentCard
  }
  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard)
    this.turns += 1
    turn.evaluateGuess()
   
    if(turn.evaluateGuess()=== false) {
      this.incorrectGuesses.push(this.deck[0].id)
    }
    const feedback = turn.giveFeedback()
    this.deck.shift()
    return feedback
  }
  calculatePercentCorrect() {
   const correctGuesses = this.turns - this.incorrectGuesses.length
    this.percentCorrect = Math.round(correctGuesses/this.turns * 100)
    return this.percentCorrect
  }
  endRound() {
    console.log (`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round