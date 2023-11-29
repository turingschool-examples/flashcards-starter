const data = require("./data");
const prototypeQuestions = data.prototypeData;
const util = require("./util");
const { countCards, createDeck, createRound } = require("./card");


function start() {
  const cards = prototypeQuestions;
  const deck = createDeck(cards);
  const round = createRound(deck);
  printMessage(deck);
  printQuestion(round);
}

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(
    deck
  )} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

module.exports = { start, printMessage, printQuestion };
