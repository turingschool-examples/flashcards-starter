const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = {};
    this.deck = []
  }
  start() {

    prototypeQuestions.forEach((card) => {
      let newCard = new Card(card.id, card.question, card.answers, card.correctAnswer);
      this.deck.push(newCard);
      // console.log(this.deck);
    });
    let deck = new Deck(this.deck);
    let round = new Round(deck);
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
