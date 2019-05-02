const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round')

class Game {
  constructor() {
    this.currentRound = [''];
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
  	var cards = prototypeData.map((el) => {
  	  var card = new Card(el.id, el.question, el.answers, el.correctAnswer);
  		return card;
  	});
  	var deck = new Deck(cards);
  	var round = new Round(deck);
  	this.currentRound = round;
  	this.printMessage(deck, round);
  	this.printQuestion(round);
  }
}

module.exports = Game;