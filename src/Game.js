const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/deck');
const Round = require('../src/round');


class Game {
  constructor() {
    this.currentRound = 0;
    this.cards = [];
  }

  printMessage(deck) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    this.currentRound++;
    for (let i = 0; i < prototypeQuestions.length; i++) {
      let card = new Card(
        prototypeQuestions[i].id,
        prototypeQuestions[i].question,
        prototypeQuestions[i].answers,
        prototypeQuestions[i].correctAnswer
      );
      this.cards.push(card);
    }
    const newDeck = new Deck(this.cards)
    const newRound = new Round(newDeck);
    this.printMessage(newDeck, newRound);
    this.printQuestion(newRound);
  }
}

module.exports = Game;
