const Turn = require('../src/Turn');

const Round = class {
  constructor(deck) {
    this.deck = deck.cards;
    this.incorrectGuesses = new Array();
    this.turns = 0;
    this.currentTurn = undefined;
    this.winPercent = 0;
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    if (guess === this.currentTurn.card.correctAnswer) {
      return 'correct!';
    } else {
      this.incorrectGuesses.push(this.returnCurrentCard.id);
      return 'incorrect!';
    }
  }

  calculatePercentCorrect() {
    return ((this.turns - this.incorrectGuesses.length) / this.turns) * 100;
  }
}

module.exports = Round;