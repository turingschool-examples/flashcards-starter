// being called from Game
// calling Turn, Card, Deck?

const Card = require('./Card')
const util = require('./util')

class Round {
  constructor() {

  }
  takeTurn() {
    //instantiaties newTurn(stringGuess, cardObject);
    //var turns++;
    //switches to next card; util line 25
       // .entries() and a next()?
       // what is round here if id is set per card?
    //evaluates guess
    //?Game.array? incorrectGuess++
    //returns feedback
  }
  returnCurrentCard() {
    //  Deck.shift()?
    // returns Card object
  }
  calculatePercentCorrect() {
    // return turns / correctGuess (will need an incrementor?)
  }
  endRound() {
    //return a message w/ % correct
  }
}

module.exports = Round;

// Why do we need a promise to be delivered when we
//  have access to correctAnswer?


// what is round here if id is set per card?



//line 2^ and line 45 util.js export
// genList(this) on line 3 util.js?
