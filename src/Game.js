const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');


class Game {
  constructor() {
    this.currentRound = "";
  };

  createDeck() {
    const cards = prototypeQuestions.map((question) => {
      return new Card(question.id, question.question, question.answers, question.correctAnswer);
    });
    this.currentDeck = new Deck(cards);
    this.currentRound = new Round(this.currentDeck);
  };

  start() {
    this.createDeck();
    this.printMessage(this.currentDeck, this.currentRound);
    this.printQuestion(this.currentRound);
  };

  printQuestion(round) {
      util.main(round);
  };

  printMessage(deck, round) {
  console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  };
};

module.exports = Game;
