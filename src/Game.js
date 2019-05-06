const data = require('../src/data');
const util = require('../src/util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


class Game {
  constructor() {
    this.currentRound = {}
    this.currentRoundCounter = 0
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with 
    ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
  buildCards(cardsToBuild) {
    let cards = cardsToBuild.map((thing)=> {
      let card = new Card (thing.id, thing.question, 
        thing.answers, thing.correctAnswer)
      return card
    })
    return cards
  }
  buildRound(cardsToBuild) {
    let cards = this.buildCards(cardsToBuild)
    let deck = new Deck(cards)
    let round = new Round(deck, this)
    this.currentRound = round
    return round
  }

  start() {
    let round = this.buildRound(data.prototypeData[this.currentRoundCounter])
    this.printMessage(round.deck, round)
    this.printQuestion(round)
    this.currentRoundCounter += 1
  }

}

module.exports = Game;