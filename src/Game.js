const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/deck');
const Round = require('../src/round');

class Game {
  constructor(){
    this.currentDeck = null;
    this.currentRound = null;
  }

  start(){
    this.initializeGame();
    this.printMessage(this.currentDeck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
  
  initializeGame(){
    const cardList = prototypeQuestions.map(question => new Card(question.id, question.question, question.answers, question.correctAnswer));
    this.currentDeck = new Deck(cardList);
    this.currentRound = new Round(this.currentDeck);
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;