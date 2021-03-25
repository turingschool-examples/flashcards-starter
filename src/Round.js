const Turn = require("./Turn");

class Round {
  constructor(deck){
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.turnCount = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    if (this.turnCount < this.deck.cards.length) {
      return this.currentCard;
    }
  }
  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.turnCount++
    this.currentCard = this.deck.cards[this.turnCount];
    return turn
  }
  calculatePercentCorrect() {
    let numCorrect = this.turnCount - this.incorrectGuesses.length;
    let percentCorrect = Math.round(numCorrect / this.turnCount * 100);
    return percentCorrect
  }
  endRound() {
    let percentCorrect = this.calculatePercentCorrect();
    console.log(`**Round over!**You answered ${percentCorrect}% of the questions correctly!`);
  }
}

module.exports = Round;
