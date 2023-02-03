const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require("./Round");
const Card = require("./Card");
const Deck = require("./Deck");
//card/deck/round

class Game {
  constructor(data) {
    this.currentRound;
    this.data = data
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  createCards(){
    const cardInfo = prototypeQuestions.map(dataInfo => {
      const cards = new Card(dataInfo["id"], dataInfo["question"], dataInfo["answers"], dataInfo["correctAnswer"])
      return cards
    })
    return cardInfo
  }

  makeDeck(){
    return new Deck(this.createCards())
  }

  createRound(){
    this.currentRound = new Round(this.makeDeck())
    return this.currentRound
  }

  start(){
    this.printMessage(this.makeDeck(), this.createRound())
    this.printQuestion(this.createRound())
  }
}

module.exports = Game;