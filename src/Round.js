const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(userGuess) {
    const turn = new Turn(userGuess, this.returnCurrentCard());
    this.turns += 1;
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(turn.currentCard.id);
      return 'incorrect!';
    } else {
      return 'correct!';
    }
  }

  calculatePercentCorrect() {
    return Math.round(100 - this.incorrectGuesses.length / this.deck.cards.length * 100);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }

}
module.exports = Round;
