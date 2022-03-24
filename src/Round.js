const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = deck[0];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    if (guess === this.currentCard.correctAnswer) {
      this.turns++;
      this.currentCard = this.deck[this.turns];
      return "correct!";
    } else {
      this.incorrectGuesses.push(this.currentCard.id);
      this.turns++;
      this.currentCard = this.deck[this.turns];
      return "incorrect!";
    }
  }

  calculatePercentCorrect() {
    let numberCorrect = this.turns - this.incorrectGuesses.length
    let percentCorrect = numberCorrect / this.turns
    return Math.round(percentCorrect * 100)
  }

  endRound() {}
}
module.exports = Round;
