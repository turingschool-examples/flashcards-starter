const data = require('./data');
const util = require('./util');

const Deck = require("./Deck");
const Round = require("./Round")
const Card= require("./Card")




class Game {
  constructor() {
     this.currentRound = null
  }

  start() {
    let cards = data.prototypeData.map((card) => new Card(card.id, card.question, card.answers, card.correctAnswer))
    let deck = new Deck(cards)
    let round = new Round(deck.cards)
    this.currentRound = round
    this.printMessage(deck, round)
    this.printQuestion(round)
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
