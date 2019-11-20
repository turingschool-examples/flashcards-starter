const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turn = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck[this.turn];
  }
  takeTurn(answer) {
    const turn = new Turn(answer, this.returnCurrentCard());
    if (turn.giveFeedback() === 'Incorrect!') {
      this.incorrectGuesses.push(this.returnCurrentCard().id);
    }
    this.turn++;
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    return (this.deck.length - this.incorrectGuesses.length) / this.deck.length * 100;
  }
  endRound() {
    return `** Round Over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;