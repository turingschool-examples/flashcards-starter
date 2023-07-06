const { createCard } = require('./card');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
// Creates cards
// Puts cards in a deck
// Creates a new round using the deck
// Invokes printMessage(deck) to display the message in the CLI
// Invokes printQuestion(round) to kick off our helper functions that allow interaction via the CLI
}

function initiateDeck() {
  
}

module.exports = { 
  printMessage,
  printQuestion,
  start
};
