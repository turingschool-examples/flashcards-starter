const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')


class Game {
  constructor(data) {
    this.currentRound = null
    this.deck = null
    this.data = data

  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
  createCards(){

  }
  putCardsInDeck(){

  }
  createRound(){

  }
  start(){

  }
}



module.exports = Game;
