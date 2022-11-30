const data = require('./data');
const Round = require('./Round');
const Card = require('./Card')
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {}

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
    // TESTED IN CONSOLE, WORKS!
    const cardData = prototypeQuestions;
    let newDeck = cardData.map(card => {
      let newCard = new Card(card.id, card.question, card.answers, card.correctAnswer);
      return newCard;
    });


    // Needs to put cards in a Deck
    // The new array of Card objects created above will then need to be added to a new Deck
    // instance in its constructor
    

    // Needs to create a new Round using the Deck
    // Need to go back and change Round to have a parameter of deck, then current card
    // will be that deck[0].

    // Must invoke printMessage to display in the CLI

    // Must invoke printQuestion to kick off helper functions to allow CLI interaction

  };
};

module.exports = Game;