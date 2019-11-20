/* eslint-disable no-console */

const Turn = require('../src/Turn');


class Round {
  constructor(deck) { 
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck[0]
  }
  takeTurn(guess) {   
    this.turns++;
    let turn = new Turn(guess, this.deck[0])
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck[0].id);
      this.deck.shift();
    } else {
      this.deck.shift()
    }
  }
  calculatePercentCorrect() {
    
  }
}
module.exports = Round