const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {this.currentRound = null;}
  
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
  start(){
    const getCards = prototypeQuestions.map((question) => {
      return new Card(question.id, question.question, question.answers, question.correctAnswer)
    });
    const deck = new Deck(getCards)
    const round = new Round(deck)
    this.currentRound = round
    this.printMessage(deck)
    this.printQuestion(round)
  }
}

module.exports = Game;