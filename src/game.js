const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { countCards } = require('../src/deck');
const { createRound, endRound } = require('../src/round');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  const cards = prototypeQuestions.map((question) => {
    return question;
  });
  const deck = cards.map((card) => {
      return card;
  });

  const round = createRound(deck);
  printMessage(deck);
  printQuestion(round);
  endRound(round);
}

module.exports = { printMessage, printQuestion, start };
