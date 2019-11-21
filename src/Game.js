/* eslint-disable no-console */
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck.js')
const Round = require('../src/Round.js')
const Card = require('../src/Card.js')

class Game {
  constructor() {
    this.currentRound = null
  }
  start() {
    // for (var i = 0; i < prototypeQuestions.length; i++) {
    //   var cards = new Card(prototypeQuestions[i].id, prototypeQuestions[i].questions, prototypeQuestions[i].answers, prototypeQuestions[i].correctAnswer)
    // }
    let deckOfCards = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })
    let deck = new Deck(deckOfCards);
    let round = new Round(deck);
    this.currentRound = round;
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