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

// //Should keep track of the currentRound
// start: method that starts everything
// Creates Cards
// Puts Cards in a Deck
// Creates a new Round using the Deck
// invokes printMessage to display the message in the CLI
// invokes printQuestion to kick off our helper functions that allow interaction via the CLI
// Note: The helper functions are all fleshed out and fit to work with classes / methods that meet the requirements in the past iterations.

// Your game.start() method should be invoked to make the game playable in the console.
// Look at the file being run when we want to start the game.Think about where you need to invoke your Game.start method.