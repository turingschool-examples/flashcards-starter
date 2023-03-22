const Turn = require('./Turn')

class Round {
    constructor(deck) {
    this.deck = deck.cards
    this.turns = 0
    this.incorrectGuesses = []
    this.currentCard = this.deck[0]
    console.log(this.currentCard)
    }

 returnCurrentCard() {
   return this.currentCard
  }
}

 





module.exports = Round;