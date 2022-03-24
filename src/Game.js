const Card = require('./Card');
const Deck = require('./Deck');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {}

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  createRound() {
    let deck = new Deck(prototypeQuestions.map(question => new Card(question.id, question.question, question.answers, question.correctAnswer)));
    
  }
}

module.exports = Game;