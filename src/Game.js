const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');


class Game {
  constructor() {
    this.cards = [];
    this.deck = {};
    this.currentRound = {};

  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  createCards() {
    this.cards = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })
  }

  createDeck() {
    this.deck = new Deck(this.cards)
  }

  createRound() {
    this.currentRound = new Round(this.deck.cards);
  }

  startGame() {
    this.createCards()
    this.createDeck()
    this.createRound()
    this.printMessage(this.deck, this.currentRound)
    this.printQuestion(this.currentRound);
    console.log(this.currentRound);
  }
}

module.exports = Game;