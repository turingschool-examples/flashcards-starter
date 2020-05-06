const Turn = require('../src/Turn');
class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.turn = null;
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }
  takeTurn(guess) {
    this.turn = new Turn (guess, this.deck.cards[this.turns]);
    this.turns++;
    if (!this.turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.turn.card.id);
      console.log(this.incorrectGuesses.length)
    }
    return this.turn.giveFeedback();
  }
  calculatePercentCorrect() {
    return Math.round( 100 * (this.turns - this.incorrectGuesses.length) / this.turns);
  }
  endRound() {
    console.log( `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;
