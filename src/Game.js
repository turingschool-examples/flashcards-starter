const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.start();
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    const cards = [];
    prototypeQuestions.forEach((question, index) => {
      let card = new Card(prototypeQuestions[index]);
      cards.push(card);
    })
  
    const deck = new Deck(cards);
    
    this.round = new Round(deck); 

    this.printMessage(deck, this.round);
    this.printQuestion(this.round);
  }
}

module.exports = Game;