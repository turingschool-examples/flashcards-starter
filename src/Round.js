const Turn = require('../src/Turn');

const Round = class {
  constructor(deck) {
    this.deck = deck.cards;
    this.incorrectGuesses = new Array();
    this.turns = 0;
    this.winPercent = 0;
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    let currentTurn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    if (guess === currentTurn.card.correctAnswer) {
      return ('correct!');
    } else {
      this.incorrectGuesses.push(currentTurn.id);
      return 'incorrect!';
    }
  }

  calculatePercentCorrect() {
    return ((this.turns - this.incorrectGuesses.length) / this.turns) * 100;
  }

  endRound() {
    console.log (`** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`);
  }
}

module.exports = Round;