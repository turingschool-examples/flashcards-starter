const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./deck');
const Round = require('./round');

class Game {
  constructor() {
    this.currentRound;
    this.card;
    this.deck;
  }

  start() {
    const newCards = prototypeQuestions.map((element) => {
      return this.card = new Card(element.id, element.question, element.answers, element.correctAnswer)
    })
    this.deck = new Deck(newCards);

    this.currentRound = new Round(this.deck);

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
}

module.exports = Game;