const { createCard, createDeck, countCards } = require('./card');
const { evaluateGuess, createRound, calculatePercentageCorrect, takeTurn, endRound} = require('../src/round');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  const deck = initiateDeck(prototypeQuestions);
  const round = createRound(deck);
  printMessage(deck);
  printQuestion(round);
}

function initiateDeck(data) {
  const cards =  data.map(element => {
    let { id, question, answers, correctAnswer} = element;
    return createCard(id, question, answers, correctAnswer);
  });

  return createDeck(cards);
}

module.exports = { 
  printMessage,
  printQuestion,
  start, 
  initiateDeck,
};
