const Card = require('./Card');
const data = require('./data');
const Round = require('./Round');
const Deck = require('../src/Deck');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = {};
  };

  start() {
    const cards = prototypeQuestions.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.printMessage(deck);
    this.printQuestion(round);
    this.currentRound = round;
    return round; 
  };

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  };

  printQuestion(round) {
      util.main(round);
  };
};

module.exports = Game;