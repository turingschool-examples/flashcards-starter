const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.card = this.deck.cards[0];
    this.turn = "";
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.card;
  }
  takeTurn(guess) {
    this.turn = new Turn(guess, this.card);
    this.turns += 1;
    console.log(this.turns);
    this.deck.cards.shift();
    this.card = this.deck.cards[0];
    if (! this.turn.evaluateGuess()) {
      this.incorrectGuesses.unshift(this.turn.card.id);
    }
    return this.turn.giveFeedback();
  }
  calculatePercentCorrect() {
    const correctGuessCount = (this.turns - this.incorrectGuesses.length);
    const percentCorrect = ((correctGuessCount / this.turns) * 100);
    return Math.trunc(percentCorrect);
  }
  endRound() {
    if (this.deck.cards.length === 0) {
      console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
      return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    }
  }
}

module.exports = Round;
