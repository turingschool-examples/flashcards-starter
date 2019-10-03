const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Game {
  constructor() {}

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    let createdCards = [];
    prototypeQuestions.forEach(function(cardData) {
      const card = new Card(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer);
      createdCards.push(card);
    })
    console.log(createdCards);
    const deck = new Deck(createdCards);
  }
}

module.exports = Game;