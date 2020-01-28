const data = require('./data');
const prototypeQuestions = data.prototypeData;
const testQuestions = data.prototypeDataTwo;
const util = require('./util');
const questions = [prototypeQuestions, testQuestions];

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = null;
    this.questionsIndex = 0
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  getQuestions() {
    let questionSet = questions[this.questionsIndex];
    this.questionsIndex += 1;
    return questionSet;
  }

  start() {
    var questionSet = this.getQuestions();
    var cards = questionSet.map(item =>
      new Card(item.id, item.question, item.answers, item.correctAnswer));
    var deck = new Deck(cards);
    var round = new Round(deck);

    this.currentRound = round;

    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;
