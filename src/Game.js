const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Turn = require('./Turn');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound = {};
  }

  start(){
    const mappedArrayData = prototypeQuestions.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    });
    const deck = new Deck(mappedArrayData);
    const round = new Round(deck);
    // this.currentRound = new Round(deck)
    this.printQuestion(round);
    this.printMessage(deck, round);
  };

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}


module.exports = Game;
