const data = require('./data');
const util = require('./util');
//const Turn = require("./Turn");
//const Card = require("./Card");
const Deck = require("./Deck");
const Round = require("./Round");
// let cards = data.prototypeData.map((card) => new Card(card.id, card.question, card.answers, card.correctAnswer))
// let deck = new Deck(cards);
// let round = new Round(deck.cards);


class Game {
  constructor(round) {
     this.currentRound = round
  }

  start() {
    printMessage(deck, round)
    printQuestion(round)
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
