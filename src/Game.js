const Card = require('./Card');
const data = require('./data').prototypeData;
const Deck = require('./Deck');
const Round = require('./Round');
const Turn = require('./Turn');
const util = require('./util');

class Game {
  constructor() {}

  start(){
    const mappedArrayData = data.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    const deck = new Deck(mappedArrayData);
    const round = new Round(deck);
    this.printQuestion(round);
    this.printMessage(deck, round);
  };

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
      util.main(round);
  }
}


module.exports = Game;
