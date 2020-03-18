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
      console.log(this.incorrectGuesses);
    }

    this.turns++;
    turn.giveFeedback();
  
  }

  calculatePercentCorrect() {
    // let incorrect = this.incorrectGuesses.length;
    let correctGuess = this.turns - this.incorrectGuesses.length;
    let correctPercentage = (correctGuess / this.turns) * 100;
    return correctPercentage;
  }
}

module.exports = Round;
