const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound;
  }

  start() {
    let cards = [];
    for (let i = 0; i < prototypeQuestions.length; i++) {
      let id = prototypeQuestions[i].id;
      let question = prototypeQuestions[i].question;
      let answers = prototypeQuestions[i].answers;
      let correctAnswer = prototypeQuestions[i].correctAnswer;
      let card = new Card(id, question, answers, correctAnswer);
      cards.push(card);
    }
    let deck = new Deck(cards);
    let round = new Round(deck);
    round.startTimer();
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
