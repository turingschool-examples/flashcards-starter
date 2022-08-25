const Turn = require('../src/turn')

class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0
    this.correctGuesses = []
    this.incorrectGuesses= []
  }
  returnCurrentCard(){
    //console.log(this.deck.cards)
    return this.deck.cards[this.turns]
  }
  takeTurn(guess){
    let turn = new Turn(guess, this.returnCurrentCard())
    turn.evaluateGuess()
    if(!turn.evaluateGuess()){
      this.incorrectGuesses.push(this.deck.cards[this.turns].id)
      } else {
      this.correctGuesses.push(this.deck.cards[this.turns].id)
    }
    this.turns ++
    return turn.giveFeedback()
  }
  calculatePercentCorrect(){
    return Math.floor((this.correctGuesses.length / this.turns) *100)
    console.log(correctPercentage)

  }
  endRound(){
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round
