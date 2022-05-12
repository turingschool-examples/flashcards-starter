const data = require("./data");
const prototypeQuestions = data.prototypeData;
const util = require("./util");
const Deck = require("../src/Deck");
const Card = require("../src/Card");
const Round = require("../src/Round");

class Game {
  constructor() {
    this.round;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    let cards = data.prototypeData.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    let deck = new Deck(cards);
    const round = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
    this.round = round;
    return round;
  }

  currentRound() {
    return this.round;
  }
}

module.exports = Game;
