const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const { createRound } = require('../src/round');
const { createCard } = require('../src/card');
const { countCards } = require('../src/deck');


function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function startGame() {
  const deck = prototypeQuestions.map(card => {
    return createCard(card.id, card.question, card.answers, card.correctAnswer);
  });
  const round = createRound(deck);
  printMessage(deck);
  printQuestion(round);
}

module.exports = {
  printMessage,
  startGame,
  printQuestion
}
