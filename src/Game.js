const Round = require('../src/Round');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Game {
  constructor(round) {
    this.round = [];
    this.currentRound = round;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    let cards = [];
    prototypeQuestions.forEach(element => {
      let singleCard = new Card(
        element.id, element.question, element.answers, element.correctAnswer);
        cards.push(singleCard)
    });
      let deck = new Deck(cards);
      let round = new Round(deck);
      this.round.push(round);
      this.printMessage(deck, round);
      this.printQuestion(round);
  }
}

module.exports = Game;
