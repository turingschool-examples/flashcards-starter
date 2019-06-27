const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Round = require('../src/Round')
const Deck = require('../src/Deck');

class Game {
  constructor() {
  	this.currentRound = {};
  }

  start() {
  	const cards = prototypeQuestions;
	const deck = this.reinstantiateDeck(cards);
	const round = this.reinstantiateNewRound(deck);
    this.printMessage(deck);
    this.printQuestion(round);
  }

  reinstantiateCard() {
    return prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
  }

  reinstantiateDeck(cards) {
    return new Deck(cards);
  }

  reinstantiateNewRound(deck) {
    return new Round(deck);
  }

  printMessage(deck) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }



}

module.exports = Game;

