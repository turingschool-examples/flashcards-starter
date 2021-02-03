
const turn = require('./Turn');
const deck = require('./Deck');
const card = require('./Card');
const util = require('./util');

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
    //?Game.incorrectGuess = []; incorrectGuess++
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
    //reset deck?
  }
}

module.exports = Round;




// what is round here if id is set per card?



//line 2^ and line 45 util.js export
// genList(this) on line 3 util.js?
