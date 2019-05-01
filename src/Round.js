const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[0]
  }

  takeTurn(currentGuess) {
    const turn = new Turn(currentGuess, this.deck.cards[0]);
    this.turn++
    this.deck.cards.shift()
    if (turn.evaluateGuess()) {
      this.correctGuesses.push(currentGuess)
    } else {
      this.incorrectGuesses.push(currentGuess)
    }
    return turn.giveFeedback()

  }

  calculatePercentCorrect() {
    return Math.floor((this.correctGuesses.length / this.turn) * 100)
  }

  endRound() {
    console.log(`**Round Over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round;