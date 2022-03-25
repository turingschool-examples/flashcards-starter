const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Card = require('./Card');


class Game {
  constructor() {
    this.currentRound;
    this.deckLength;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    let cards = prototypeQuestions.map(function(card) {
           return new Card(card['id'], card['question'], card['answers'], card['correctAnswer'])
       })
    let deck = new Deck(cards)
    let round = new Round(deck)
 
    this.currentRound = round
    this.printMessage(deck, this.currentRound)
    this.printQuestion(this.currentRound)
  }
}

module.exports = Game;