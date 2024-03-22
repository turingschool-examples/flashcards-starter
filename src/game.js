const data = require('./data');
const { createDeck, countCards } = require('./deck');
const { round } = require('./round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
function start(){
  const deck = createDeck(prototypeQuestions)
  console.log(deck)
  printMessage(newRound.deck)
  printQuestion(newRound)
};
function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

module.exports = { printMessage, printQuestion, start };
