const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const { createCard } = require('../src/card');
const { createDeck, countCards } = require('../src/deck');
const { createRound } = require('../src/round');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  // create cards and puts them in a cards array
  const cards = [];
  prototypeQuestions.forEach((card) => {
    cards.push(createCard(card.id, card.question, card.answers, card.correctAnswer))
  });
  // put card array into a deck
  const deck = createDeck(cards);
  // create new round using the deck
  const round = createRound(deck);
  // invoke printMessage(deck) to display the message in the CLI
  printMessage(deck);
  // invoke printQuestion(round) to kick off our helper functions
  printQuestion(round);
}

module.exports = { printMessage, printQuestion, start };


