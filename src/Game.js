const data = require("./data");
const prototypeQuestions = data.prototypeData;
const util = require("./util");
const Card = require("./Card");

class Game {
  constructor() {
    this.storedCards = [];
  }
  load() {
    this.storedCards = prototypeQuestions.map((item) => {
      var card = new Card(
        item.id,
        item.question,
        item.answers,
        item.correctAnswer
      );
      return card;
    });
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
