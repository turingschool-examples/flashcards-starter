const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const util = require('../src/util');

var Card = require('../src/Card');
var Deck = require('../src/Deck');
var Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = '';
    this.deck;
    this.cards = [];
  }
  startGame() {
    // use the prototypeQuestions to make new cards
    for (var i = 0; i < prototypeQuestions.length; i++) {
     var card = new Card(prototypeQuestions[i]);
     this.cards.push(card);
   }
   var deck = new Deck(this.cards);
   var round = new Round(deck);
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
