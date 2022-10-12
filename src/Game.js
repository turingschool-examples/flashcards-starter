const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('./Deck');
const Card = require('./Card');
const Round = require('./Round');

class Game {
  constructor() {

  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    const cards = prototypeQuestions.map(card => {
      let newCard = new Card(card.id, card.question, card.answers, card.correctAnswer);
      return newCard;
    })
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.currentRound = round;
    console.time('Total time spent');
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  testStart() {
    const cards = prototypeQuestions.map(card => {
      let newCard = new Card(card.id, card.question, card.answers, card.correctAnswer);
      return newCard;
    })
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.currentRound = round;
    this.testingArray = [cards, deck, round];
    return this.testingArray;
  }
}

module.exports = Game;