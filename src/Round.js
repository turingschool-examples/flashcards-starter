const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0
  }

  returnCurrentCard() {
    return this.deck.cards[0]
  }

  takeTurn(guess) {
    var turn = new Turn(guess, this.deck.cards[0])
    this.turns = this.turns += 1
    // console.log('Our console log to admire', round.deck.cards[0])
    this.deck.cards.shift()
   
  }
}

module.exports = Round
//