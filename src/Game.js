const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Card');

class Game {
  constructor() {}

  start() {
    let cards = prototypeQuestions.map(cardObjLiteral => {
      const card = new Card(cardObjLiteral.id, cardObjLiteral.question,           cardObjLiteral.answers, cardObjLiteral.correctAnswer)
      return card;
    });
    let deck = new Deck(cards);
    let round = new Round(deck, this);
    this.printMessage(deck, round);
    this.printQuestion(round);
    
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