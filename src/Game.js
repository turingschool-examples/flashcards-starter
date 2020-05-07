const data = require('./data');
const util = require('./util');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const prototypeQuestions = data.prototypeData;

class Game {
  constructor() {
    this.currentRound = 1;
    this.cards = [];
    this.deck = [];
  }

  start(){
    for(let i = 0; i < prototypeQuestions.length; i++) {
      let card = new Card(prototypeQuestions[i].id, prototypeQuestions[i].question, prototypeQuestions[i].answers, prototypeQuestions[i].correctAnswer);
      this.cards.push(card);
    }
    this.deck = this.cards;
    let round = new Round(this.deck);
    this.round = round;
    return this.cards;
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