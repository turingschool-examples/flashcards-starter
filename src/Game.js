const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Turn = require("./Turn");
const Card = require("./Card");
const Deck = require("./Deck");
const Round = require("./Round");

class Game {
  constructor() {
    this.currentRound
  }

  start() {
    let cardArr = prototypeData.map((ele) => {
      return new Card(ele.id, ele.question, ele.answers, ele.correctAnswer);
    });
    let deck = new Deck(cardArr);
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