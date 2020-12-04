const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = 0;
    this.deck = [];
  }

  createCards() {
    prototypeQuestions.forEach(flashCard => {
      let card = new Card(flashCard.id, flashCard.question, flashCard.answers, flashCard.correctAnswer);
      this.deck.push(card);
    })
    this.createDeck();
  }

  createDeck() {
    let deck = new Deck(this.deck);
    this.deck = deck.deck;
    console.log(this.deck);
  }

  startGame() {
    this.createCards();
    let round = new Round(this.deck);
    this.currentRound++;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
};

module.exports = Game;
