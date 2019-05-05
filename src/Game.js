const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor(currentRound) {
  	this.currentRound = {};
  }

  start() {
  	const cards = prototypeQuestions.map(function(currentCard) {
  		const card = new Card(currentCard.id, currentCard.question, currentCard.answers, currentCard.correctAnswer)
  		return card;
  	});
  	const deck = new Deck(cards);
  	const round = new Round(deck);
  	this.currentRound = round;
  	this.printMessage(deck);
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