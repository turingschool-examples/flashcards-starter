const data = require("./data");
const prototypeQuestions = data.prototypeData;
const util = require("./util");

const Round = require("./Round.js");
// const Turn = require("../src/Turn.js");
const Card = require("./Card.js");
const Deck = require("./Deck.js");

class Game {
  constructor() {
    this.currentRound;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    let cards = prototypeQuestions.map(
      (card) =>
        new Card(card.id, card.question, card.answers, card.correctAnswer)
    );
    let deck = new Deck(cards);
    const round = new Round(deck)
    this.currentRound = round
    this.printMessage(deck, round)
    this.printQuestion(round)
  }
}

module.exports = Game;
