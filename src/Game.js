const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('./Deck');
const Round = require ('../src/Round.js')
const Card = require('../src/Card.js');
const Turn  = require('../src/Turn.js');

class Game {
  constructor(round) {
  this.currentRound = round
  }
  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
  start(gameData){
    // this.currentRound.turns = 0
    // this.currentRound.incorrectGuesses = []
    var cards = gameData.map(card => { 
      return new Card(card.id,card.question,card.answers,card.correctAnswer)
    })
   
    var deck = new Deck(cards)
    this.round = new Round (deck)
    this.printMessage(deck,this.round)
    this.printQuestion(this.round)
  }

}

module.exports = Game;