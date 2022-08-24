const Turn = require('../src/turn')

class Round {
  constructor(deck){
    this.deck = deck
    this.turn = 0
    this.incorrectGuesses = []
    this.correctGuesses = []
  }
  returnCurrentCard(){
    return this.deck.cards[this.turn]
  }
  takeTurn(guess){
    const currentTurn = new Turn(guess, this.deck.cards[this.turn])
    if(currentTurn.evaluateGuess()){
      this.correctGuesses.push(this.deck.cards[this.turn].id)
    }else{
      this.incorrectGuesses.push(this.deck.cards[this.turn].id)
    }
    this.turn ++
    return currentTurn.giveFeedback()
  }

}




module.exports = Round
