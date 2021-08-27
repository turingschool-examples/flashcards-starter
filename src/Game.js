const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Turn = require('./Turn');

class Game {
  constructor() {
    this.cards = [];
    this.deck = {};
    this.currentRound = {};
  }

  start() {
    this.cards = prototypeQuestions.map(cardInfo => {
      return new Card(cardInfo.id, cardInfo.question, cardInfo.answers, cardInfo.correctAnswer);
    })

    this.deck = new Deck(this.cards);
    this.currentRound = new Round(this.deck);

    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printQuestion(round) {
    util.main(round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
}
module.exports = Game;
