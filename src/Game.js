const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.round = 0
    this.deck
    this.cards
  }
  
  printQuestion(round) {
    util.main(round);
  }
  
  makeCards() {
    this.cards = prototypeQuestions.map(card => card = new Card(card.id, card. question, card.answers, card.correctAnswer))
  }
  
  makeDeck() {
    this.deck = new Deck(this.cards)
  }
  
  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
    -----------------------------------------------------------------------`)
  }
  
  startRound() {
    return this.round = new Round(this.deck)
  }
    
  start() {
    this.makeCards()
    this.makeDeck()
    this.startRound()
    this.printQuestion(this.round)
    this.printMessage(this.deck)
  }
}

module.exports = Game;