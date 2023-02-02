const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round')
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Game = require('../src/Game');
const { prototype } = require('mocha');

class Game {
  constructor(round) {
    this.currentRound = round
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    this.createCards()
    this.createDeck()
    this.createRound()
    this.printMessage
    this.printQuestion
  }

  createCards() {
    const gameCards = prototypeQuestions.map(question => {
    const cards = new Card(question.id, question.question, question.answers, question.correctAnswer)
    return cards
   })
   return gameCards
  }

  createDeck() {
    const newDeck = new Deck(this.createCards())
    return newDeck
  }

  createRound() {

  }






}

module.exports = Game;