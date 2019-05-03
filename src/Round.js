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
    this.turnCounter();
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck.cardDeck[this.turns].id);
    }
    return turn.giveFeedback();
  }

  createNewTurn(userGuess) {
    return new Turn(userGuess, this.returnCurrentCard());
  }

  turnCounter() {
    this.turns++;
  }

  calculatePercentCorrect() {
    return `${Math.round((this.incorrectGuesses.length * 100) / this.turns)}%`;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`);
  }
}

module.exports = Round;