const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor(deck, turn, round) {
    this.deck = deck;
    this.turn = turn;
    this.round = round;
    this.turns = -1;
    this.currentRound = 0;
    console.log(deck.countCards())
    
  }
  
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
  start(){
    console.log('New Result', this.deck) 
    this.currentRound = this.currentRound += 1
    this.turns = this.turns += 1
    this.printMessage(deck, round)
    this.printQuestion()

    return this.deck.newQuestions[this.turns]
  }

}

module.exports = Game;