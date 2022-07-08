const Card = require("./Card");
const data = require("./data");
const Deck = require("./Deck");
const Round = require("./Round");
const prototypeQuestions = data.prototypeData;
const util = require("./util");
// const Card = require("../src/Card");
// const Deck = require("../src/Deck");
// const Round = require("../src/Round");
// const Turn = require("../src/Turn");

class Game {
  constructor() {
    this.currentRound;
    this.deck;
  }

  createCards() {
    let cards = prototypeQuestions.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    return cards;
  }

  createDeck() {
    this.deck = new Deck(this.createCards());
    return this.deck;
  }

  makeANewRound() {
    this.currentRound = new Round(this.createDeck());
    return this.currentRound;
  }

  start() {
    this.makeANewRound();
    this.printMessage(this.createDeck(), this.createRound());
    this.printQuestion(this.createRound());
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
