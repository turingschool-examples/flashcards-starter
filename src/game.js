const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { createCard } = require('../src/card');
const { createDeck, countCards } = require('../src/deck');
const { createRound } = require('../src/round');


const start = () => {
  const cards = prototypeQuestions.map((element) => 
  createCard(element.id, element.question, element.answers, element.correctAnswer))
  const deck = createDeck(cards)
  const round = createRound(deck)
  round.startTime = new Date()
  printMessage(deck)
  printQuestion(round)
}

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}



module.exports = { start, printMessage, printQuestion };
