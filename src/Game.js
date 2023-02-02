const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round')
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const { prototype } = require('mocha');

class Game {
  constructor() {
    this.currentRound 
    this.currentDeck
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    this.createRound()
    this.printMessage(this.currentDeck, this.currentRound)
    this.printQuestion(this.currentRound)
  }

  createCards() {
    const gameCards = prototypeQuestions.map(question => {
    const cards = new Card(question['id'], question['question'], question['answers'], question['correctAnswer'])
    return cards
   })
   return gameCards
  }

  createDeck() {
    this.currentDeck = new Deck(this.createCards())
    return this.currentDeck
  }

  createRound() {
    this.currentRound = new Round(this.createDeck())
  }
}

module.exports = Game;