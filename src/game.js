const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const {createDeck, countsCards} = require('./deck');
const {createRound } = require('./round');
const { createCard } = require('./card');



function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countsCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  const cards = prototypeQuestions.map((card) => {
    return createCard(card.id, card.question, card.answers, card.correctAnswer)
  });
  let deck = createDeck(cards)
  let round = createRound(deck)
  printMessage(deck)
  printQuestion(round)
  return cards;
}

module.exports = { printMessage, printQuestion, start};
