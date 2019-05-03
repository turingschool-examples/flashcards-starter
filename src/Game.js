const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card'); 
const Round = require ('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.currentRound = {};
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    let cards = prototypeQuestions.map(element => {
      let card = new Card(element.id, element.question, element.answers, element.correctAnswer);
      return card;
    });
    let deck = new Deck(cards);
    let round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

}
 
module.exports = Game;