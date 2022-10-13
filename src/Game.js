const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./deck');
const Round = require('./round');

class Game {
  constructor() {
    this.currentRound;
    this.cards;
    this.deck;
  }

  start() {
    this.createGameInfo()
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  createGameInfo() {
    const newCards = prototypeQuestions.map((element) => {
      return new Card(element.id, element.question, element.answers, element.correctAnswer)
    })
    this.cards = newCards
    this.deck = new Deck(newCards);

    this.currentRound = new Round(this.deck);
  }
}

module.exports = Game;