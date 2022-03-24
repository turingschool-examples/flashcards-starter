const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = this.createRound()
  }

  start() {
    this.createRound();
    this.printMessage(this.currentRound.deck, this.currentRound)
    this.printQuestion(this.currentRound)
  }

  createRound() {
    let cardsArray = [];
    prototypeQuestions.forEach((data) => {
      var card = new Card(data.id, data.question, data.answers, data.correctAnswer)
      cardsArray.push(card)
    });

    let deck = new Deck(cardsArray);
    let round = new Round(deck);
    return round;
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
