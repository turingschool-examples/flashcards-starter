const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card')
const Deck = require('./Deck')
const Round = require('./Round')


class Game {
  constructor() {
  }

  start() {
    const deck = new Deck(prototypeQuestions.map(question => new Card(question.id, question.question, question.answers, question.correctAnswer)));
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
    
  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }

}

module.exports = Game;