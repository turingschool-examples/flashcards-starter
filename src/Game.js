const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound = {};
  }

  start() {
    let nextCard = prototypeQuestions.map(card => {
      let newCard = new Card(card.id, card.question, card.answers, card.correctAnswer);
      return newCard;
    })
    let deck = new Deck(nextCard);
    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
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

// UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'answers' of undefined
//     at genList @ util 6