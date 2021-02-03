
const Turn = require('./Turn');
const Deck = require('./Deck');
const Card = require('./Card');
const util = require('./util');

class Round {
  constructor(deck) { // instance of Deck
    this.deck = deck.cards; //array of objs
    this.turns = 0;
    this.incorrectGuesses = []
    this.currentCard = this.deck[0];
  }
  takeTurn(guess) {
    this.turns++;
    //console.log(this.currentCard)
    //this.turn = new Turn(userGuess, currentCard)//(stringGuess, cardObject);

    //switches to next card; util line 25
       // .entries() and a next()?
       // what is round here if id is set per card?
    //evaluates guess
    //?Game.incorrectGuess = []; incorrectGuess++
    return
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
