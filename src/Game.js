const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {}

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.cardCount()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    this.cards = prototypeQuestions.map(cardInfo => new Card(
      cardInfo['id'],
      cardInfo['questions'],
      cardInfo['answers'],
      cardInfo['correctAnswer'])
    )
    this.deck = new Deck(this.cards)
    this.round = new Round(this.deck)
    this.printMessage(this.deck, this.round)
  }

}

module.exports = Game;