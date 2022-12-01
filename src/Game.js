const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');
const Card = require('./Card');
const Deck = require('./Deck');

class Game {
  constructor() {
    this.currentRound = Object.prototype;
    // this.cards = [];
    // this.deck = Object.prototype;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  createCardDeckRound(cardData) {
    let newCards = cardData.map(card => {
      let newCard = new Card(card.id, card.question, card.answers, card.correctAnswer);
      return newCard;
    });

    let newDeck = new Deck(newCards);
    let newRound = new Round(newDeck);
    this.currentRound = newRound;
  };

  start(cardData) {
    this.createCardDeckRound(cardData);
    this.printMessage(this.currentRound.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  };

};

module.exports = Game;