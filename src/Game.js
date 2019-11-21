const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card.js');
const Round = require('../src/round');
const Deck = require('../src/deck.js');
const Turn = require('../src/turn.js');


class Game {
  constructor() {
    this.currentGame = null;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  start() {
    for (var i = 0; i < prototypeQuestions.length; i ++) {
      let cards = new Card(prototypeQuestions[i].id, prototypeQuestions[i].question, prototypeQuestions[i].answers, prototypeQuestions[i].correctAnswer);
      console.log(cards);
      let deckOfCards = new Deck(cards);
      let round = new Round(deckOfCards);
      return deckOfCards;
    }

    this.printMessage(deck, round);
    this.printQuestion(round);
    currentGame = round;
  }

  printQuestion(round) {
      util.main(round);
  }

}

module.exports = Game;
