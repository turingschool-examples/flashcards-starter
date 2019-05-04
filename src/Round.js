const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.turns = 0;
    this.deck = deck || [];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cardDeck[this.turns];
  }

  takeTurn(userGuess) {
    const turn = this.createNewTurn(userGuess);
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck.cardDeck[this.turns].id);
    }
    this.turnCounter();
    return turn.giveFeedback();
  }

  createNewTurn(userGuess) {
    return new Turn(userGuess, this.returnCurrentCard());
  }

  turnCounter() {
    this.turns++;
  }

  calculatePercentCorrect() {
    return `${Math.round(100 - (this.incorrectGuesses.length * 100) / this.turns)}%`;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`);
  }
}

module.exports = Round;