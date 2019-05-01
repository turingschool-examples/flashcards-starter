const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.turns = 0;
    this.deck =  deck || {}
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
      return this.deck.cards[this.turns]
  }
  takeTurn(guess) {
    let turn = new Turn (guess, this.deck.cards[this.turns])
    this.turns += 1
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(turn.card.id)
    }
    return turn.giveFeedback()
  }
  calculatePercentCorrect() {
    return (Math.floor(100 - (this.incorrectGuesses.length/this.turns*100)))
  }
}

module.exports = Round;