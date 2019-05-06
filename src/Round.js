const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.card[this.turns];
  }
  takeTurn(guess) {
    let turn = new Turn(this.returnCurrentCard(), guess);
    this.turns++
    turn.evaluateGuess() ? null : this.incorrectGuesses.push(turn.card.id);
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    return Math.floor((this.turns - this.incorrectGuesses.length)
    / this.turns * 100);
  }
  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;