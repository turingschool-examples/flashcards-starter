const Turn = require('./Turn')
class Round {
  constructor(deck) {
    this.deck = deck
    this.turnCounter = 0
    this.incorrectCards = []
  }

  returnCurrentCard() {
    return this.deck.cards[0]
  }

  takeTurn(guess) {
    const card = this.returnCurrentCard() 
    const turn = new Turn(guess, card)
    
    this.turnCounter++
    this.deck.cards.shift()

    if(!turn.evaluateGuess()) {
      this.incorrectCards.push(turn.card.id)
    } 
    
    return turn.giveFeedback()
  }
}


module.exports = Round 


//calculatePercentCorrect() 
// calculates and returns the percentage of correct guesses
// var correctCards = this.turns - this.incorrectCards.length
// var correctCardsPercentage = correctCards / this.turnCounter * 100

//endRound() 
// return `Round over! You answered ${correctCardsPercentage}% of the questions correctly!`
