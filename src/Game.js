const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card.js');
const Round = require('../src/round');
const Deck = require('../src/deck.js');
const Turn = require('../src/turn.js');


class Game {
  constructor() {
    this.currentGame = null;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  start() {
    for (var i = 0; i < prototypeQuestions.length; i ++) {
      let cards = new Card(prototypeQuestions[i].id, prototypeQuestions[i].question, prototypeQuestions[i].answers, prototypeQuestions[i].correctAnswer);
      let deckOfCards = new Deck(cards);
      // let turn = new Turn();
      let round = new Round(deckOfCards);
      return deckOfCards;
    }
    // for loop over this to get into each card
    // let deck = new card( card.propertys)
    // return that deckofCards

    // let deck = new decklet round = new ROund of deck
    // call the two functions to start the game - print message and print question

  }

  printQuestion(round) {
      util.main(round);
  }

}

module.exports = Game;
