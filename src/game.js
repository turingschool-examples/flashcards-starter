const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const { createDeck, countCards} = require('../src/deck');
const { createCard, evaluateGuess } = require('../src/card');
const { createRound } = require('../src/round');

function start() {
  let newDeck = createDeck(prototypeQuestions);
  let newRound = createRound(newDeck);
  printMessage(newDeck);
  printQuestion(newRound);
}

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

module.exports = { printMessage, printQuestion, start };
