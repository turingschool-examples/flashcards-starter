const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { createCard, createDeck, createRound, countCards } = require('./card')

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start(){
  const questions = []
  prototypeQuestions.forEach(question => {
    questions.push(createCard(question.id, question.question, question.answers, question.correctAnswer))
  });
  const deck = createDeck(questions)
  const round = createRound(deck)
  printMessage(deck)
  printQuestion(round)
}

module.exports = { printMessage, printQuestion, start };
