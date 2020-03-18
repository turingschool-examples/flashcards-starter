const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }
  
  takeTurn(guess) {
    let turn = new Turn(guess, this.deck[this.turns]);
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck[this.turns].id);
    }
    this.turns++;
    return turn.giveFeedback()
  }

  calculatePercentCorrect() {
    let correct = this.deck.length - this.incorrectGuesses.length;
    let percentCorrect = (correct/this.deck.length) * 100;
    return percentCorrect
  }

  endRound() {
    let percent = this.calculatePercentCorrect();
    return `** Round over! ** You answered ${percent}% of the questions correctly!`
  }
}

module.exports = Round;