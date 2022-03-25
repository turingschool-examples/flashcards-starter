const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = deck[0];
    this.incorrectGuesses = [];
    this.currentTurn = null

  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard)
    this.currentTurn = turn
    this.turns++;
    if (guess === this.currentCard.correctAnswer) {
      this.currentCard = this.deck[this.turns];
      return "correct!";
    } else {
      this.incorrectGuesses.push(this.currentCard.id);
      this.currentCard = this.deck[this.turns];
      return "incorrect!";
    }
  }

  calculatePercentCorrect() {
    let numberCorrect = this.turns - this.incorrectGuesses.length
    let percentCorrect = numberCorrect / this.turns
    return Math.round(percentCorrect * 100)
  }

  endRound() {
     return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}
module.exports = Round;
