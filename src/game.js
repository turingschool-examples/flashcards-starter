const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { createCard, createDeck, countCards } = require('../src/card');
const { initRoundController } = require('../src/round');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(
    deck,
  )} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function createCardListFromDataset(dataset) {
  return dataset.map(data => {
    return createCard(data.id, data.question, data.answers, data.correctAnswer);
  });
}

function start() {
  const cards = createCardListFromDataset(prototypeQuestions);
  const deck = createDeck(cards);
  const round = initRoundController(deck);
  printMessage(deck);
  printQuestion(round);
}

module.exports = {
  printMessage,
  printQuestion,
  createCardListFromDataset,
  start,
};
