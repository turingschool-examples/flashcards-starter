const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    console.log(prototypeQuestions);
    let cards = prototypeQuestions.map(data => {
    return new Card(data.id, data.question, data.answers, card.correctAnswer);
  });
    console.log(cards);
    // let deckInstance = new Deck();
    // let deck = new Deck(cards);
    // let roundInstance = new Round();
    // let round = new Round(deck);
    // this.currentRound = round;
    // this.printMessage(deck, round);
    // this.printQuestion(round);
  }
}

module.exports = Game;

//instantiate new cards, deck, turn, round here???
