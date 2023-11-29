const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');
const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');
const { evaluateGuess } = require('../src/turn');
const { prototypeData } = require ('../src/data')

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function startGame() {

}

module.exports = { printMessage, printQuestion, startGame };
