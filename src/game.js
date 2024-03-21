const data = require("./data");
const { createDeck, countCards } = require("./deck");
const { createRound } = require("./round");
const prototypeData = data.prototypeData;
const util = require("./util");

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(
    deck
  )} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start(deck) {
  createDeck(deck);
  const round = createRound(deck);
  printMessage(deck);
  printQuestion(round);
}

module.exports = { printMessage, printQuestion, start };
