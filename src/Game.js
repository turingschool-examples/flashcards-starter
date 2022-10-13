const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.deck;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    let cards = data.prototypeData.map(cardData => {
      return new Card(cardData)
    })
    
    this.deck = new Deck(cards)

    
  }
}

module.exports = Game;