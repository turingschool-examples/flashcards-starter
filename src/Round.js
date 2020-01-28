const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentTurn = null;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
  }
  returnCurrentCard() {
      return this.deck.cards[0];
  }
  takeTurn(guess) {
    this.turns += 1;
    this.currentTurn = new Turn(guess, this.returnCurrentCard());
    var card = this.deck.cards.shift();
    var guessOutcome = this.currentTurn.evaluateGuess();
    if (guessOutcome === false) {
      this.incorrectGuesses.push(card);
    } else {
      this.correctGuesses.push(card);
    }
    return this.currentTurn.giveFeedback();
  }
  calculatePercentCorrect() {
    return Math.round((this.correctGuesses.length / this.turns) * 100);
  }
  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!
-----------------------------------------------------------------------`);
  }
}

module.exports = Round;
