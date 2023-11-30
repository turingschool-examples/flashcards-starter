const data = require("./data");
const prototypeQuestions = data.prototypeData;
const util = require("./util");
const {
  createCard,
  countCards,
  createDeck,
  createRound,
  endRound,
} = require("./card");

function start() {
  const cards = prototypeQuestions.map((data) => {
    return createCard(data.id, data.question, data.answers, data.correctAnswer);
  });
  const deck = createDeck(cards);
  const round = createRound(deck);
  printMessage(deck);
  printQuestion(round);
  endRound(round);
}

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(
    deck
  )} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

module.exports = { start, printMessage, printQuestion };
