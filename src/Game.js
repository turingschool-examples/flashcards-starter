const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

class Game {
  constructor() {
    this.cardsArray = [];
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    this.cardsArray = prototypeQuestions.map(cardObj => {
      const card = new Card(cardObj.id, cardObj.question, cardObj.answers, cardObj.correctAnswer)
      return card;
    });

    const deck = new Deck(this.cardsArray);

    const round = new Round(deck);
    // a way to test that values are coming through
    // return round.deck.cards.length;

    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;
