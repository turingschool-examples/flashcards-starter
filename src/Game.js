//resets deck
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('./Round');
const Deck = require('./Deck');


class Game {
  constructor() {
    this.currentRound = {};
  }

  start() {
    this.buildDeck();
    this.currentRound = new Round(this.deck);
    this.printMessage(this.deck);
    this.printQuestion(this.currentRound);
  }

  buildDeck() {
    const cards = [];
    prototypeQuestions.forEach(element => {
      cards.push(element);
    });
    this.deck = new Deck(cards);
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)

  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
