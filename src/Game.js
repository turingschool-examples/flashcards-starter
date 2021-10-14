/* eslint-disable max-len */
/* eslint-disable no-console */
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');


class Game {
  constructor() {
    this.cards = [];
    prototypeQuestions.forEach((newCard) => {
      this.cards.push(new Card(newCard["id"], newCard["question"], newCard["answers"], newCard["correctAnswer"]))
    });
    this.deck = new Deck(this.cards);
    this.round = new Round(this.deck);
  }
  currentRound() {
    return this.round.turns;
  }
  start() {

    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round);
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