const Turn = require("../src/Turn")
class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[0];
  }

  takeTurn(userGuess) {
    let turn = new Turn(userGuess, this.returnCurrentCard())
    this.turns++;
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.returnCurrentCard().id)
    }
    this.deck.cards.shift();
    return turn.giveFeedback();
  }

  calculatePercentage() {
    let percentCorrect = Math.round(
      ((this.turns - this.incorrectGuesses.length) / this.turns) * 100
    )
    return percentCorrect
  }

  endRound() {
    console.log(
      `** Round over! ** You answered ${this.calculatePercentage()}% of the questions correctly`
    )
    console.timeLog('Game Run Time')
    return `** Round over! ** You answered ${this.calculatePercentage()}% of the questions correctly!`
  }
}

module.exports = Round;
