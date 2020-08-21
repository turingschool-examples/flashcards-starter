const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

class Game {
  constructor() {
    this.currentRound = null;
  }
  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
      util.main(round);
  }
  start() {
    const cards = prototypeQuestions.map(card =>
      new Card(
        card['id'],
        card['question'],
        card['answers'],
        card['correctAnswer']
      ));
    const deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
    }
  }

module.exports = Game;
