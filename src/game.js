const data = require('./data');
const { createCard, evaluateGuess, createDeck, countCards, createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round')
const { dataSub } = require('../src/dataSub');


const prototypeQuestions = data.prototypeData;
const util = require('./util');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

const start = dataSub => {
  const deck = createDeck(dataSub);
  const round = createRound(deck);
  printQuestion(round);
  printMessage(deck);
}

start(dataSub);
// const deck = createDeck(dataSub);
// const round = createRound(deck);
// printMessage(deck);
// printQuestion(round);

module.exports = { printMessage, printQuestion };
