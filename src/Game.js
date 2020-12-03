const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound = 1;
  }

  start() {
    const cards = prototypeQuestions.map(question => {
      return new Card(question['id'], question['question'], question['answers'], question['correctAnswer']);
    });
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
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
