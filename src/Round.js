const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.deck;
    this.turns = 0;
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard())
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(turn.card.id)
    }
    this.turns++
    return turn.giveFeedback()
  }

  calculatePercentCorrect() {
    let x = this.incorrectGuesses.length
    let y = this.turns
    let num = ((y - x) / y) * 100;
    return Math.floor(num)
  }

  endRound() {
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}
module.exports = Round