const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.rounds = 0;
    this.incorrectGuesses = [];
    this.currentTurn;
  }
  returnCurrentCard() {
    return this.deck.cards[this.rounds];
  }
  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.deck.cards[this.rounds]);
    if (!this.currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck.cards[this.rounds].id);
    }
    this.rounds++;
    return this.currentTurn.giveFeedback();
  }
  calculatePercentCorrect() {
    return Number(
      (
        ((this.rounds - this.incorrectGuesses.length) / this.rounds) *
        100
      ).toFixed(2)
    );
  }
  endRound() {
    console.log(
      `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    );
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;
