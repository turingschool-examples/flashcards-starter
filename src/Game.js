const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');


class Game {
  constructor() {
    this.currentRound = null;
  }
  start() {
    const cards = this.createCards();
    const deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage(deck);
    this.printQuestion();
  }
  createCards(questions) {
    return questions.map(question => new Card(question));
    }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

const game = new Game();
game.start();
console.log(game.currentRound);

const Game = require('../src/Game')
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');


module.exports = Game;