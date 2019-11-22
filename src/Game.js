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

  start() {
    let deckOfCards = [];
    let round;
    for (var i = 0; i < prototypeQuestions.length; i ++) {
      let card = new Card(prototypeQuestions[i].id, prototypeQuestions[i].question, prototypeQuestions[i].answers, prototypeQuestions[i].correctAnswer);
      deckOfCards.push(card);
    }
    deckOfCards = new Deck(deckOfCards);
    round = new Round(deckOfCards);
    this.printMessage(deckOfCards, round);
    this.printQuestion(round);
    this.currentGame = round;
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
