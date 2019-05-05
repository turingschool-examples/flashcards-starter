const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck || {cards: []};
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }
  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    turn.evaluateGuess() ? null : this.incorrectGuesses.push(turn.card.id);
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    return Math.floor(((this.turns - this.incorrectGuesses.length) / this.turns) * 100);
  }
  endRound() {
    let winLoss = this.calculatePercentCorrect();
    return `** Round over! ** You answered ${winLoss}% of the questions correctly!`
  }
}

module.exports = Round;