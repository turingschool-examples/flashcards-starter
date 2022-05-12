const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {}

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
  start(){
    //instantiate all the cards, then instantiate those into the deck
    const getCards = prototypeQuestions.map((question) => {
      return new Card(question.id, question.question, question.answers, question.correctAnswer)
    })
    console.log(getCards)
    //creates cards
    //put cards in deck
  }
}

module.exports = Game;