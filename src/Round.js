const Turn = require('../src/Turn');
const Game = require('../src/Game');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard = this.deck.allCards[this.turns];
  }

  takeTurn(guess) {
    this.turns++;
    let turn = new Turn(guess, this.currentCard);
    turn.evaluateGuess();
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    return turn.giveFeedback();
    this.returnCurrentCard();
  }

  calculatePercentCorrect() {
    let correctGuesses = this.deck.allCards.length -this.incorrectGuesses.length;
    let percentageCorrect = (correctGuesses/this.deck.allCards.length) * 100;
    return Math.floor(percentageCorrect);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    if (this.calculatePercentCorrect() < 90) {
      let game = new Game(round);
      game.start();
    }
  }
}

module.exports = Round;
