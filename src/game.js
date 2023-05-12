const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const { createCard } = require("../src/card");
const { prototypeData } = require("../src/data");
const { createDeck, countCards } = require("../src/deck");
const { evaluateGuess } = require("../src/turns");
const { createRound, takeTurn, endRound, calculatePercentCorrect } = require("../src/round");

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

const testsData = prototypeData;

const start = () => {
  const deck = testsData.map(card => createCard(card.id, card.question, card.answers, card.correctAnswer));
  const round = createRound(deck);
  printMessage(deck);
  printQuestion(round);
}

module.exports = { printMessage, printQuestion, start};
