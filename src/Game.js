const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.questions = data.prototypeData;
    this.cards = [];
  }

  start() {
    for (var i = 0; i < this.questions.length; i++) {

      let card = new Card({"id": this.questions[i].id, "question": this.questions[i].question, "answers": this.questions[i].answers, "correctAnswer": this.questions[i].correctAnswer});
      this.cards.push(card);
    }
      let deck = new Deck(this.cards);
      let round = new Round(deck);
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
