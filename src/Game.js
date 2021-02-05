const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card')
const Round = require('../src/Round')
const Deck = require('../src/Deck')

class Game {
  constructor() {
    this.currentRound = 0;
    this.cards = []
  }

  start() {
    for (var i = 0; i < prototypeQuestions.length; i++) {
      const card = new Card(prototypeQuestions[i].id, prototypeQuestions[i].question, prototypeQuestions[i].answers, prototypeQuestions[i].correctAnswer)
      this.cards.push(card)
    }
    this.round++
    const deck = new Deck(this.cards);
    const round = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round)
    return this.cards.length
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
