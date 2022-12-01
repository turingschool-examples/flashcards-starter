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

  createCards(cardData) {
    let newCards = cardData.map(card => {
      let newCard = new Card(card.id, card.question, card.answers, card.correctAnswer);
      return newCard;
    });
    // Main issue here is that this is not creating instances of cards correctly
    // Answer cannot be read because of this
    let newDeck = new Deck(newCards);
    let newRound = new Round(newDeck);
    this.currentRound = newRound;
  };

  // putCardsInDeck() {
  //   this.deck = new Deck(this.cards);
  // };

  // createNewRound() {
  //   const newRound = new Round(this.deck);
  //   this.currentRound = newRound;
  // };

  start(cardData) {
    this.createCards(cardData);
    // this.putCardsInDeck();
    // this.createNewRound();
    this.printMessage(this.currentRound.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  };

};

module.exports = Game;