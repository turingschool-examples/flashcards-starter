const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = this.deck.deckOfCards[this.turns];
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(input) {
    this.currentCard = this.deck.deckOfCards[this.turns];
    let turn = new Turn(input, this.returnCurrentCard());
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.turns += 1;
    if (this.turns === 30) {
      this.endRound();
    }
    return turn.giveFeedback();
  }

  calculatePercentage() {
    let percent =
      ((this.turns - this.incorrectGuesses.length) / this.turns) * 100;
    return parseInt(percent);
  }
  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentage()}% of the questions correctly!`;
  }
}
module.exports = Round;
