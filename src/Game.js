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
    this.cards = []
  }
  start() {
    // for (var i = 0; i < prototypeQuestions.length; i++) {
    //   let card = new Card(prototypeQuestions[i]);
    //   this.cards.push(card);
    // }
    let cardDeck = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })
    let deck = new Deck(cardDeck);
    let round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }


  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;