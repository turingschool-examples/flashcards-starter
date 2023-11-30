const data = require('./data.js');
const prototypeQuestions = data.prototypeData;
const util = require('./util.js');
const decks = require('./Deck.js');
function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${deck.countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

module.exports = { printMessage, printQuestion };
