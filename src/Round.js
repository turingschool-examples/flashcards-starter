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
    let turn = new Turn(guess, this.deck[0]);
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck[0].id);
    }
    this.deck.shift();
    return turn.giveFeedback();
  }
  

  calculatePercentCorrect() {
    var average = Math.floor((this.turns - this.incorrectGuesses.length) / (this.turns) * (100))
    return average
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}
module.exports = Round