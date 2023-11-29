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
  const deck = prototypeData.map(card => {
    return createCard(card)
  })
  // for (var i = 0; i < prototypeData.length; i++) {
  //   deck.push(createCard(prototypeData[i]))
  // }
  console.log(deck)
  // createRound
  // printMessage
  // printQuestion
}
console.log(startGame())

module.exports = { printMessage, printQuestion, startGame };
