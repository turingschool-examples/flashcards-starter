const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');


class Game {
  constructor(nothing) {
    this.currentRound = nothing || this.start();
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    const cards = this.createCards();
    const deck = this.createDeck(cards);
    const round = this.createRound(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
    return round;
  }

  createCards() {
    let cards = [];
    for (let i = 0; i < prototypeQuestions.length; i++) {
      let {
        id,
        question,
        answers,
        correctAnswer
      } = prototypeQuestions[i];
      const card = new Card(id, question, answers, correctAnswer);
      cards.push(card);
    }
    return cards;
  }

  createDeck(cards) {
    const deck = new Deck(cards);
    return deck;
  }

  createRound(deck) {
    const round = new Round(deck);
    return round
  }
}

module.exports = Game;
