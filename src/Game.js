const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { createCard } = require('./card');
const { createDeck, countCards } = require('./deck');
const { createRound } = require('./round');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`)
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  const cards = data.prototypeData.map(({ id, question, answers, correctAnswer }) => createCard(id, question, answers, correctAnswer));
  const deck = createDeck(cards);
  const round = createRound(deck);
  printMessage(deck, round);
  printQuestion(round);
}

module.exports = { printMessage, printQuestion, start };