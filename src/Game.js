const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.currentRound = [];
    //this.start = this.startGame();    
  }

  // startGame() {
  //   this.createCards();
  //   this.createDeck();
  //   this.createRound();
  //   this.printMessage(this.createDeck())
  //   this.printQuestion(this.createRound())
  // }

  createCards() {
    this.currentRound = prototypeQuestions.map(el => {
      return new Card(el.id, el.question, el.answers, el.correctAnswer)
    })
  }

  // createDeck() {
  //   return new Deck(this.currentRound)
  // }

  // createRound() {
  //   return new Round(this.createDeck())
  // }
 

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }


}

module.exports = Game;