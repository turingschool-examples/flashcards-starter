const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.turn;
    this.turnsTaken = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn() {
    this.turnsTaken += 1;
    this.turn = new Turn('pug', this.currentCard);
    if (!this.turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
  }

  calculatePercentCorrect() {
    var numCorrect = this.turns - this.incorrectGuesses.length;
    return (numCorrect / this.turns) * 100;
  }

  endRound() {
    var percent = this.calculatePercentCorrect();
    return `** Round over! ** You answered ${percent}% of the questions correctly!`;
  }
}

module.exports = Round;