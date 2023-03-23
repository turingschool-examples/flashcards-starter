const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require("./Card");
const Deck = require("./Deck");
const Round = require("./Round");

class Game {
  constructor() {
    this.currentRound = 0;
  }

  createCard(id, question, answers, correctAnswer) {
    let card = new Card(id, question, answers, correctAnswer);
    return card;
  }

  createDeck(cards) {
    let deck = new Deck(cards);
    return deck;
  }

  startNewRound(deck) {
    let round = new Round(deck);
    this.currentRound++;
    return round;
  }


  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    let cards = [];
    prototypeQuestions.forEach(question => {
      let card = this.createCard(question.id, question.question, question.answers, question.correctAnswer);
      cards.push(card);
    });
    let deck = this.createDeck(cards);
    let round = this.startNewRound(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;