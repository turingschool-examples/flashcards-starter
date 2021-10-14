const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.start();
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    const cards = [];
    const createCards = () => {
      prototypeQuestions.forEach((question) => {
        let card = new Card(question);
        cards.push(card);
      })
    }
    createCards();
    const deck = new Deck(cards);
    this.round = new Round(deck);
    this.printMessage(deck);
    this.printQuestion(this.round);
  }
}

module.exports = Game;