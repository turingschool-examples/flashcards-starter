const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.deck;
    this.round;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    let cards = data.prototypeData.map(cardData => {
      return new Card(cardData)
    })
    
    this.deck = new Deck(cards)
    this.round = new Round(this.deck)

    this.printMessage(this.deck, this.round)
    this.printQuestion(this.round)
  }
}

module.exports = Game;