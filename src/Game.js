const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');
const Turn = require('./Turn');

class Game {
  constructor() {
    this.currentRound = '';
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let card2 = new Card(2, 'What can you use to make unit testing code DRYer?', ['hooks', 'assertion libraries', 'Mocha'], 'hooks');
    let card3 = new Card(3, 'What can you use to store similar data in a list?', ['object', 'array', 'function'], 'array');
    let deck = new Deck([card, card2, card3]);
    let round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
  startRefactor() {
    // console.log('inside of startRefactor');
    let cards = prototypeQuestions.reduce((acc, question) => {
      acc.push(new Card(question.id, question.question, question.answers, question.correctAnswer));
      return acc;
    }, []);
    let deck = new Deck(cards);
    let round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;
