const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    let currentTurn = new Turn(guess, this.deck.cards[this.turns]);
    if (currentTurn.giveFeedback() !== 'correct!') {
      this.incorrectGuesses.push(this.deck.cards[this.turns].id);
    }
    this.turns += 1;
    return currentTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    let numberOfCorrectAnswers = this.turns - this.incorrectGuesses.length;
    return (numberOfCorrectAnswers / this.turns) * 100;
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()} of the answers correctly!`;
  }
}

module.exports = Round;
