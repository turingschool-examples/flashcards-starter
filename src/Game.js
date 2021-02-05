const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck')
const Card = require('../src/Card')
const Round = require('../src/Round')

class Game {
  constructor() {
    this.currentRound = 0
  }
  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    this.currentRound += 1;
    let deck = new Deck(this.createCards());
    let round = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  createCards() {
    let cards = [];
    for(var i=0;i<prototypeQuestions.length;i++) {
      let card = new Card(prototypeQuestions[i].id, prototypeQuestions[i].question, prototypeQuestions[i].answers, prototypeQuestions[i].correctAnswer)
      cards.push(card);
    }
    return cards;
  }
}

module.exports = Game;
