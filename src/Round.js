const Turn = require('../src/Turn');
const Game = require('../src/Game');

class Round {
  constructor(deck) {
    this.deck = deck.cardDeck
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(turn.card.id)
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let percentage = (this.turns - this.incorrectGuesses.length) / (this.turns) * 100;
    return Math.floor(percentage);
  }

  endRound() {
    const game = new Game();
    if (this.calculatePercentCorrect() === 100) {
      console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()} % of the questions correctly. Way to go!!!`)
    }
    if (this.calculatePercentCorrect() <= 90) {
      console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()} % of the questions correctly. Great job! Try for 100% correct!`)
    }
  }

}

module.exports = Round;