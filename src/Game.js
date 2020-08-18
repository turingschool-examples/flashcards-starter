const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const prototypeQuestions = data.prototypeData;
const Round = require('./Round')
const util = require('./util');

class Game {
  constructor() {}

  start() {
    let cards = prototypeQuestions.map(card => new Card(...Object.values(card)));
    let deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage(this.currentRound.deck, this.currentRound);
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

let game = new Game();
game.start();
