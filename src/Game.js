const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Round = require('./Round');
const Deck = require('./Deck');

class Game {
  constructor() {
    this.currentRound = null;
    this.cards = [];
  }

  start() {
    let cards = prototypeQuestions.map(card => {
      card = new Card(card.id, card.question, card.answers, card.correctAnswer);
      return card;
    });
    let deck = new Deck(cards);
    let currentRound = new Round(deck);
    this.printMessage(deck, currentRound);
    this.printQuestion(currentRound);
    this.currentRound = currentRound;
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
