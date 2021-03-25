const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round");


class Game {
  constructor() {
    this.currentRound;
    this.testing = false;
  }

  start() {
    const cards = [];
    prototypeQuestions.forEach(card => {
    const {id, question, answers, correctAnswer} = card;
    cards.push(card = new Card(id,question,answers,correctAnswer));
    });
    const deck = new Deck(cards)
    this.currentRound = new Round(deck, deck.cards[0])
    if(this.testing) {
      return;
    } else {
      this.printMessage(deck, this.currentRound);
      this.printQuestion(this.currentRound);
    }
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
