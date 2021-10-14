const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.currentRound;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    const cards = prototypeQuestions.map( (dataPiece) => {
      return new Card(dataPiece['id'], dataPiece['question'], dataPiece['answers'], dataPiece['correctAnswer'])
    });
    const deck = new Deck(cards);
    this.currentRound = new Round('guess', deck);

    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  };
};

module.exports = Game;
