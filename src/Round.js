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
      turn.giveFeedback();
    } else {
      this.deck.shift()
      turn.giveFeedback();
    }
  }
  calculatePercentCorrect() {
    var average = Math.floor((this.turns - this.incorrectGuesses.length) / (this.turns) * (100))
    if (this.deck.length === 0) {
      this.endRound(average)
      return `${average}%`  
    } else {
      return `${average}%`
    }
  }
  endRound(average) {
    return `** Round over! ** You answered ${average} of the questions correctly!`
  }
}
module.exports = Round