const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
class Game {
  constructor() {
    this.cards = [];
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
  start(){
    this.cards = prototypeQuestions.map(question => new Card(question.id, question.question, question.answers, question.CorrectAnswer));
    
  }
}

module.exports = Game;
