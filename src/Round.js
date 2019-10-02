const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.index = 0;
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess) {
    this.turns = this.turns + 1;
    let turn = new Turn (guess, this.currentCard);
    turn.evaluateGuess();
    if (turn.guessStatus === false) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.index++;
    this.currentCard = this.deck[this.index];
    // somehow return the value of turn.evaluateGuess?
    // return turn; // can probably remove before submission
  }
  calculatePercentCorrect() {
    let percentCorrect = Math.floor((this.incorrectGuesses.length / this.deck.length) * 100);
    return percentCorrect;
  }
  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;
