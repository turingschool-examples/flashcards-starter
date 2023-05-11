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
  console.time('Time')
  const questions = []
  prototypeQuestions.forEach(question => {
    questions.push(createCard(question.id, question.question, question.answers, question.correctAnswer))
  });
  const deck = createDeck(questions)
  const round = createRound(deck)
  printMessage(deck)
  printQuestion(round)
  
};

module.exports = { printMessage, printQuestion, start};