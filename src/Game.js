const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Game {
  constructor(round) {
    this.currentRound = round;
  };

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  };

  printQuestion(round) {
      util.main(round);
  };

  start() {
  this.cardCreator()
  };

  cardCreator(id, question, possibleAnswers, correctAnswer) {
    let card1 = new Card(id, question, possibleAnswers, correctAnswer);
    let card2 = new Card(id, question, possibleAnswers, correctAnswer);
    let card3 = new Card(id, question, possibleAnswers, correctAnswer);

    let deck = new Deck([card1, card2, card3]);
    return deck
  };

};

module.exports = Game;
