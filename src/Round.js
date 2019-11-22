/* eslint-disable no-console */

const Turn = require('../src/Turn');

class Round {
  constructor(deck) { 
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.time = Date.now();
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
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly! You got ${this.incorrectGuesses.length} questions wrong.`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly! You got ${this.incorrectGuesses.length} questions wrong. `
  }
  tellTime() {
    let millis = Date.now() - this.time;
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    console.log(`This round took you ${minutes} minutes and ${seconds} seconds`)
    return `This round took you ${minutes} minutes and ${seconds} seconds`
  }
}
module.exports = Round