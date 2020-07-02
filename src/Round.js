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
    var incorrectGuesses = []
    this.turns = this.turns += 1
    this.deck.cards.shift()
    if(turn.guess === turn.card.correctAnswer) {
      return `Correct!`
    } else {
      incorrectGuesses.push(turn.card.id)
      console.log(`Incorrect!`)
      return incorrectGuesses
    }
  }
}

module.exports = Round
//