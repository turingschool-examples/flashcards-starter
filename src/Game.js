const data = require('./data');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

const Card = require('../src/Card');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound
  }
     
  start() {
    let newCards = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)}
      )
      let deck = new Deck(newCards)
      this.currentRound = new Round(deck)
      this.printMessage(deck, this.currentRound)
      this.printQuestion(this.currentRound)
      return this.currentRound
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