const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    //this.currentRound
      //round = new Round

      //new round is new card, using new deck, for the new turn
  }
    
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  //import cards and data

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;