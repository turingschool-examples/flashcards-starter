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

  
  start() {
    
  }

  makeCards() {
    this.cards = prototypeQuestions.map(card => card = new Card(card.id, card. question, card.answers, card.correctAnswer))
  }

  makeDeck() {
    this.deck = new Deck(this.cards)
  }

  startRound() {
    return this.round = new Round(this.deck)
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