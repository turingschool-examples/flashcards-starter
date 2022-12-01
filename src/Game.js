const Card = require('./Card');
const data = require('./data');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.round = 0
    this.cards
  }

  start() {
    
  }

  makeCards() {
    this.cards = prototypeQuestions.map(card => card = new Card(card.id, card. question, card.answers, card.correctAnswer))
  }


  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;