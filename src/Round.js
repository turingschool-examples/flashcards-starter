const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentTurn = {};
    this.turns = 0;
    // this.currentCardIndex = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard = () => this.deck.cards[this.turns];

  takeTurn(guess) {
    let cardId = this.returnCurrentCard().id;
    this.currentTurn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    if (!this.currentTurn.evaluateGuess()) this.incorrectGuesses.push(cardId);
    return this.currentTurn.giveFeedback();
  }

  calculatePercentageCorrect() {
    let correctAnswers = this.turns - this.incorrectGuesses.length;
    let percentageCorrect = (correctAnswers / this.turns) * 100;
    return Math.floor(percentageCorrect);
  }

  endRound() {
    let percentage = this.calculatePercentageCorrect();
    let endMessage = `** Round over! ** You answered ${percentage}% of the questions correctly!`;
    console.log(endMessage);
    return process.exit();
  }
}

module.exports = Round;