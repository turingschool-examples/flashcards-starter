const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = null;
    this.cards = [];
    this.deck = {};
    this.timeStart = 0;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    Round.startTime = this.startTimer()
    this.cards = prototypeQuestions.map((cardDetails) => {
      let newCard = new Card(cardDetails.id, cardDetails.question, cardDetails.answers, cardDetails.correctAnswer);
      return newCard;
    })
    this.deck = new Deck(this.cards);
    this.currentRound = new Round(this.deck);
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  startTimer() {
    return this.startTime = Date.now()
  }
}

module.exports = Game;