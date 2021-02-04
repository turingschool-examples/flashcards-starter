const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound;
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    let cardsToBuildDeck = [];
    prototypeQuestions.forEach(cardInfo => cardsToBuildDeck.push(new Card(cardInfo.id, cardInfo.question, cardInfo.answers, cardInfo.correctAnswer)));
    const deckForRound = new Deck(cardsToBuildDeck);
    this.currentRound = new Round(deckForRound);
    this.printMessage(deckForRound);
    this.printQuestion(this.currentRound);
  }
}

module.exports = Game;
