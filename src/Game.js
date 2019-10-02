const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = '';
  }
  start() {
    let newCards = [];
    for (let i = 0; i < data.prototypeData.length; i++) {
      const card = new Card(i + 1, data.prototypeData[i].question, data.prototypeData[i].answers, data.prototypeData[i].correctAnswer);
      newCards.push(card);
    }
    let deck = new Deck(newCards);
    let round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
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
