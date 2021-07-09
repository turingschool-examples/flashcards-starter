// const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

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
    let newTurn = new Turn(guess, this.deck.cards[this.turns]);

    if(newTurn.giveFeedback() === 'Incorrect') {
      this.incorrectGuesses.push(this.returnCurrentCard().id)
    }
    this.turns++;
    this.determineGameEnd();
    return newTurn.giveFeedback();
  }
  calculatePercentCorrect() {
  let turnsAmt = this.turns;
  let incorrects = this.incorrectGuesses.length;
    return (incorrects / turnsAmt) * 100;
  }
  determineGameEnd() {
    if(this.turns === this.deck.cards.length) {
      return true;
    }
  }
  endRound() {
    if(this.determineGameEnd()) {
      return (`** Round Over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    }
  }
};
module.exports = Round;
