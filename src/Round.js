const Turn = require('../src/Turn');
const util = require('./util');

class Round {
  constructor(deck) {
    this.deck = deck.cardDeck
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(turn.card.id)
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let percentage = (this.turns - this.incorrectGuesses.length) / (this.turns) * 100;
    return Math.floor(percentage);
  }

  endRound() {
    if (this.calculatePercentCorrect() <= 90) {
      console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()} % of the questions correctly. Try again for 90% correct!`)
      this.resetGame()
    } else {
      console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()} % of the questions correctly. Way to go!!! Great job!!!`)
      util.endGame()
    }
  }

  resetGame() {
    this.deck = this.deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    util.main(this);
  }
}

module.exports = Round;