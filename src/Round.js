const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0
  }

  returnCurrentCard() {
    // console.log(`RETURNED CARD `, this.deck.cards[0])
    return (`this is the returned card `, this.deck.cards[0])
  }

  takeTurn(guess) {
    var turn = new Turn(guess, this.deck.cards[0])
    this.turns = this.turns += 1
    // console.log('Our console log to admire', round.deck.cards[0])
    this.deck.cards.shift()
    console.log('Our console log to admire', this.deck)
   return this.deck
  }
}

module.exports = Round
//