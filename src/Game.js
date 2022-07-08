const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = null;
    this.cards = [];
    this.deck = {};

  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
  createCards() {
      this.cards = prototypeQuestions.map((card) => {
      return new Card(card)   
    });
  }

  createDeck() {
    this.deck = new Deck(this.cards)
  }
  createRound() {
    this.currentRound = new Round(this.deck)
  }

  returnCurrentRound() {
    return this.currentRound 

  }
  startGame() {
    this.createCards();
    this.createDeck();
    this.createRound();
    this.returnCurrentRound();
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
    }
  }


module.exports = Game;

