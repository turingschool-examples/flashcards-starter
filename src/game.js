const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { createCard, createDeck, countDeck} = require('./card');
const {createRound} = require('./round');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countDeck(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start(){
  // console.time('Timer!')
  const questions = []
  prototypeQuestions.forEach(question => {
    questions.push(createCard(question.id, question.question, question.answers, question.correctAnswer))
  });
  console.log(questions)
  const deck = createDeck(questions)
  const count = countDeck(deck)
  const round = createRound(deck)
  printMessage(deck)
  printQuestion(round)
}
module.exports = { printMessage, printQuestion, start};