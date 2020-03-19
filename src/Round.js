const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.deck.cards[this.turns]);
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck.cards[this.turns].id);
    }

    this.turns++;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let correctGuess = this.turns - this.incorrectGuesses.length;
    let correctPercentage = Math.floor((correctGuess / this.turns) * 100);
    return correctPercentage;
  }

  endRound() {
    let message = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    console.log(message);
    return message;
  }
}

module.exports = Round;
