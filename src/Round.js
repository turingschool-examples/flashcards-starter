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
      console.log('wrong')
    } else {
      this.deck.shift()
      console.log('right')
    }
  }
  calculatePercentCorrect() {
    //if the length in incorrectGuesses is 1
    //and the length of turns is 1
    //return 0
    //if the length in incorrectGuesses is 2
    //and the length of turns is 3
    //return 2 / 3 * 100
    var average = Math.floor((this.turns - this.incorrectGuesses.length) / (this.turns) * (100))
    return `${average}%`
  }
}
module.exports = Round