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

  takeTurn(guess) {
    this.turn = new Turn(guess, this.currentCard);
    this.turnsTaken += 1;
    if (!this.turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.turn.giveFeedback();
    this.currentCard = this.deck.cards[this.turnsTaken];
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