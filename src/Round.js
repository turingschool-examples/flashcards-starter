const Turn = require('./Turn')
class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0
    this.incorrectCards = []
  }

  returnCurrentCard() {
    return this.deck.cards[0]
  }

  takeTurn(guess) {
    const card = this.returnCurrentCard() 
    const turn = new Turn(guess, card)
    
    this.turns++
    this.deck.cards.shift()

    if(!turn.evaluateGuess()) {
      this.incorrectCards.push(turn.card.id)
    } 
    
    return turn.giveFeedback()
  }

  calculatePercentCorrect() {
    const correctCards = this.turns - this.incorrectCards.length
    const correctCardsPercentage = (correctCards / this.turns) * 100

    return correctCardsPercentage
  }

  endRound() {
    return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}


module.exports = Round 

