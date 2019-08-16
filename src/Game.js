const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');


class Game {
  constructor() {
    this.currentRound = {};
  }

  start() {
    let cards = prototypeQuestions.map(currElem => {
      let card = new Card(currElem.id, currElem.question, currElem.answers, currElem.correctAnswer);
      return card;
    });
    
    let deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.cardCount()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;