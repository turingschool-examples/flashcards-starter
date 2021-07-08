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

  calculatePercentCorrect() {
    const correctCards = this.turnCounter - this.incorrectCards.length
    const correctCardsPercentage = (correctCards / this.turnCounter) * 100

    return correctCardsPercentage
  }

  endRound() {
    return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}


module.exports = Round 

