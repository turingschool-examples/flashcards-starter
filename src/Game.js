const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

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
    let createdCards = [];
    prototypeQuestions.forEach(function(cardData) {
      const card = new Card(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer);
      createdCards.push(card);
    })
    const deck = new Deck(createdCards);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);

  }
}

module.exports = Game;