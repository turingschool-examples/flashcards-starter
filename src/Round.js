const Turn = require('./Turn');

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
    let checkAnswer = turn.evaluateGuess();
    if (!checkAnswer) {
      this.incorrectGuesses.push(this.deck[this.turns].id);
    }
    this.turns++;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let correctGuesses = (this.turns - this.incorrectGuesses.length);
    let percentageCorrect = ((correctGuesses / this.turns) * 100);
    return percentageCorrect;
  }

  endRound() {
    let percent = this.calculatePercentCorrect();
    return `** Round over! ** You answered ${percent}% of the questions correctly!`
  }
}

module.exports = Round;
