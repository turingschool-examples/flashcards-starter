const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

class Game {
  constructor() {
  }
  start() {
    const deck = new Deck(this.createCards());
    const round = new Round(deck);
    round.timer();
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
  createCards() {
    let randomCards = data.prototypeData.sort(function() { return 0.5 - Math.random() } ).slice(0,10);
    let deckCards = []
    randomCards.forEach(function(card) {
      deckCards.push(new Card(card.id, card.question, card.answers, card.correctAnswer));
    });
    return deckCards
  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.\n-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
