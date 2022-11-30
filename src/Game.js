const data = require('./data');
const Round = require('./Round');
const Card = require('./Card')
const Deck = require('./Deck')
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = Object.prototype;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    // Needs to create Cards
    // This is going to be an array of objects that need to be instantiated as a class of
    // Card for each element, thinking .map of .forEach will be needed here
    // Card(id, question, answers, correctAnswer)
    const cardData = prototypeQuestions;
    let newCards = cardData.map(card => {
      let newCard = new Card(card.id, card.question, card.answers, card.correctAnswer);
      return newCard;
    });
    // Needs to put cards in a Deck
    // The new array of Card objects created above will then need to be added to a new Deck
    // instance in its constructor
    const newDeck = new Deck(newCards);

    // Needs to create a new Round using the Deck
    const newRound = new Round(newDeck);
    this.currentRound = newRound;

    // Must invoke printMessage to display in the CLI
    this.printMessage(newRound);

    // Must invoke printQuestion to kick off helper functions to allow CLI interaction
    this.printQuestion(newDeck, newRound);
  };
};

module.exports = Game;