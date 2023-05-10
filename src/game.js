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
  let cards = prototypeQuestions.map(question => createCard(question.id, question.question, question.answers, question.correctAnswer));
  let deck = createDeck(...cards);
  let round = createRound(deck);

  printMessage(deck);
  printQuestion(round);
}

module.exports = { printMessage, printQuestion, start };
