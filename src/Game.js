const data = require('./data');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.round = new Round(new Deck([""]));
  }

  start() {
    let cards = [];
    for(let i=0; i<10; i++) {
      let card = new Card(prototypeQuestions[i])
      cards.push(card);
    }
    const deck = new Deck(cards);
    this.round = new Round(deck);
    this.printMessage(deck, this.round);
    this.printQuestion(this.round);
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
