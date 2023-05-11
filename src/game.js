const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { createCard } = require('../src/card');
const {createDeck, countDeck,} = require('../src/deck');
const { endRound, createRound, calculatePercentCorrect } = require('../src/round');
const { evaluateGuess, takeTurn } = require('../src/turn');


function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countDeck(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start(){
  const questions = []
  prototypeQuestions.forEach(question => questions.push(createCard(question.id, question.question, question.answers, question.correctAnswer)))
  const deck = createDeck(questions)
  const round = createRound(deck)
  printMessage(deck)
  printQuestion(round)
}

module.exports = { printMessage, printQuestion, start };
