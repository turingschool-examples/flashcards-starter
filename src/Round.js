const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  
  returnCurrentCard(turn) {
    return this.deck[0];
  }

  takeTurn(guess) {
    var turn = new Turn(guess, this.returnCurrentCard);
    this.turns += 1;
    turn.evaluateGuess();
    turn.giveFeedback();
    this.incorrectGuesses.push(guess);
    if (turn.evaluateGuess()) {
      this.deck.shift()
    }
  }

  calculatePercentCorrect() {
    return (this.turns - this.incorrectGuesses) / this.turns;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;