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
    //Is there a way to do this using an iterator method? To change the order of the items in an array?
    turn.evaluateGuess()
   
    if(turn.evaluateGuess()=== false) {
      this.incorrectGuesses.push(this.deck[0].id)
    }
    let feedback = turn.giveFeedback()
    this.deck.push(this.deck[0])
    this.deck.shift()
    return feedback
  }
  calculatePercentCorrect() {
   let correctGuesses = this.turns - this.incorrectGuesses.length
    this.percentCorrect = Math.round(correctGuesses/this.turns * 100)
    return this.percentCorrect
  }
  endRound() {
    console.log (`** Round over! ** You answered ${this.percentCorrect}% of the questions correctly!`)
    //Do I need a test for this?
  }
}

module.exports = Round