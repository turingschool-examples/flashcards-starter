const Card = require('./Card')
const main = require('./util')

class Round {
  constructor(deck) {
    this.deck = deck;
  }
  //methods:
  //returnCurrentCard() {
  //  this.deck.shift();
  //}
  //endRound() {
  //}
}

module.exports = Round;

// Why do we need a promise to be delivered when we
//  have access to correctAnswer?

// util line 25: is takeTurn function going to use
// .entries() and a next()?
// what is round here if id is set per card?


//line 2^ and line 45 util.js export
